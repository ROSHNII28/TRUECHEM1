const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

// Create transporter (Gmail example — works with any SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,   // your Gmail address
    pass: process.env.SMTP_PASS,   // Gmail App Password (not your login password)
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, company, email, phone, subject, message } = req.body;

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,   // e.g. Sales@truechem.co.in
      replyTo: email,
      subject: subject ? `[Truechem] ${subject}` : '[Truechem] New Enquiry',
      html: `
        <h2 style="color:#1a4a8a">New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          ${company ? `<tr><td><strong>Company</strong></td><td>${company}</td></tr>` : ''}
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ''}
          ${subject ? `<tr><td><strong>Subject</strong></td><td>${subject}</td></tr>` : ''}
          <tr><td valign="top"><strong>Message</strong></td><td>${message.replace(/\n/g, '<br>')}</td></tr>
        </table>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Nodemailer error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));