const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Test Route
app.get("/", (req, res) => {
  res.send("Truechem backend running successfully");
});

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.google.com', // or your specific provider's SMTP host
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    // Do not fail on invalid certs (helps with cloud routing)
    rejectUnauthorized: false 
  }
});

// Contact Form Route
app.post("/api/contact", async (req, res) => {
  const { name, company, email, phone, subject, message } = req.body;

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required",
    });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: subject
        ? `[Truechem] ${subject}`
        : "[Truechem] New Contact Form Submission",

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color:#1a4a8a;">New Contact Form Submission</h2>

          <table 
            cellpadding="10" 
            style="border-collapse: collapse; width: 100%; max-width: 650px;"
          >
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            ${
              company
                ? `
            <tr>
              <td><strong>Company</strong></td>
              <td>${company}</td>
            </tr>
            `
                : ""
            }

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            ${
              phone
                ? `
            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>
            `
                : ""
            }

            ${
              subject
                ? `
            <tr>
              <td><strong>Subject</strong></td>
              <td>${subject}</td>
            </tr>
            `
                : ""
            }

            <tr>
              <td valign="top"><strong>Message</strong></td>
              <td>${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Nodemailer Error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
});

// Server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});