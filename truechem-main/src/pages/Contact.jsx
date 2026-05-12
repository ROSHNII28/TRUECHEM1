import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';
import {
  MdCheckCircle,
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdSend
} from 'react-icons/md';
import indiamartLogo from '../assets/indiamart-logo.png';
import '../styles/Contact.css';

const contactInfo = [
  {
    icon: <MdEmail />,
    label: 'Email',
    value: 'Sales@truechem.co.in',
    link: 'mailto:Sales@truechem.co.in',
    color: 'blue',
  },
  {
    icon: <MdPhone />,
    label: 'Phone',
    value: '+91 9979997334 / 9869125603',
    link: 'tel:+919979997334',
    color: 'blue',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+91 9979997334 / 9869125603',
    link: 'https://wa.me/919979997334',
    color: 'green',
  },
  {
    icon: <MdLocationOn />,
    label: 'Address',
    value: '101, Rajasthan Technical Centre, LBS Marg, Ghatkopar West, Mumbai – 400086',
    link: 'https://maps.google.com/?q=Ghatkopar+West+Mumbai',
    color: 'blue',
  },
];

const subjects = [
  'Product Enquiry', 'Bulk Order', 'Technical Support',
  'Pricing Request', 'Distributorship', 'Other',
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Contact() {
  useScrollReveal();

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const errs = validate();
  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    return;
  }

  try {
    const res = await fetch("https://truechem1.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      setSubmitted(true);
      setForm({
        name: '', company: '', email: '', phone: '', subject: '', message: ''
      });
    } else {
      alert("Failed to send message");
    }

  } catch (err) {
    console.error(err);
    alert("Error sending message");
  }
};

  

  return (
    <div className="contact-page">

      {/* ── Hero ── */}
      <section className="page-hero contact-hero">
        <div className="page-hero-bg" />
        <img
          className="page-hero-img"
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80"
          alt="Contact us"
          loading="eager"
        />
        <div className="container page-hero-inner">
          <span className="section-label animate-fade-down">Get in Touch</span>
          <h1 className="animate-fade-up">We'd Love to<br />Hear From You</h1>
          <p className="animate-fade-up anim-delay-1">
            Reach out for product enquiries, bulk orders, technical support or partnership opportunities.
          </p>
          <div className="hero-contact-pills animate-fade-up anim-delay-2">
            <a href="tel:+919979997334" className="hero-pill">
              <MdPhone /> +91 9979997334
            </a>
            <a href="mailto:Sales@truechem.co.in" className="hero-pill">
              <MdEmail /> Sales@truechem.co.in
            </a>
            <a href="https://wa.me/919979997334" target="_blank" rel="noreferrer" className="hero-pill hero-pill-green">
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Main Contact Section ── */}
      <section className="section contact-section">
        <div className="container">

          <div className="contact-grid">

            {/* ── Left – Info ── */}
            <div className="contact-info-col reveal reveal-left">
              <span className="section-label">Reach Us</span>
              <h2>Contact Information</h2>
              <div className="divider" />
              <p className="info-intro">
                Our team is available Monday to Saturday, 9 AM – 6 PM IST.
                Expect a response within 24 hours.
              </p>

              <div className="info-cards">
                {contactInfo.map(({ icon, label, value, link, color }, i) => (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={`info-card ic-${color}`}
                    key={label}
                    style={{ '--card-delay': `${i * 0.08}s` }}
                  >
                    <div className="ic-icon">{icon}</div>
                    <div>
                      <span className="ic-label">{label}</span>
                      <span className="ic-value">{value}</span>
                    </div>
                    <div className="ic-arrow">→</div>
                  </a>
                ))}
              </div>

              {/* Hours badge */}
              <div className="hours-badge">
                <div className="hours-dot" />
                <div>
                  <span className="hours-title">Business Hours</span>
                  <span className="hours-sub">Mon – Sat &nbsp;·&nbsp; 9:00 AM – 6:00 PM IST</span>
                </div>
              </div>

              {/* IndiaMART */}
              <a
                href="https://www.indiamart.com/true-chem/"
                target="_blank"
                rel="noreferrer"
                className="indiamart-btn"
              >
                <img src={indiamartLogo} alt="IndiaMART" className="im-logo" />
                <div>
                  <span className="im-title">View on IndiaMART</span>
                  <span className="im-sub">Browse our complete catalogue</span>
                </div>
                <FaExternalLinkAlt className="im-arrow" />
              </a>
            </div>
            {/* ── End Left – Info ── */}

            {/* ── Right – Form ── */}
            <div className="contact-form-col reveal reveal-right">
              {submitted ? (
                <div className="success-state">
                  <div className="success-icon"><MdCheckCircle /></div>
                  <h2>Message Sent!</h2>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-header">
                    <h2>Send Us a Message</h2>
                    <p>Fill out the form and we'll get back to you shortly.</p>
                  </div>
                  <div className="divider" />

                  <div className="form-row">
                    <div className={`form-group${errors.name ? ' error' : ''}`}>
                      <label htmlFor="name">Full Name <span className="req">*</span></label>
                      <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} />
                      {errors.name && <span className="err-msg">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company Name</label>
                      <input id="company" name="company" type="text" placeholder="Acme Constructions" value={form.company} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={`form-group${errors.email ? ' error' : ''}`}>
                      <label htmlFor="email">Email Address <span className="req">*</span></label>
                      <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                      {errors.email && <span className="err-msg">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a subject...</option>
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className={`form-group${errors.message ? ' error' : ''}`}>
                    <label htmlFor="message">Message <span className="req">*</span></label>
                    <textarea id="message" name="message" rows={5} placeholder="Tell us about your requirements..." value={form.message} onChange={handleChange} />
                    {errors.message && <span className="err-msg">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <MdSend /> Send Message
                  </button>
                </form>
              )}
            </div>
            {/* ── End Right – Form ── */}

          </div>
          {/* ── End contact-grid ── */}

          {/* ── Map ── */}
          <div className="map-container reveal reveal-up">
            <div className="map-header">
              <MdLocationOn />
              <div>
                <span className="map-title">Our Office</span>
                <span className="map-sub">101, Rajasthan Technical Centre, LBS Marg, Ghatkopar West, Mumbai – 400086</span>
              </div>
            </div>
            <div className="map-frame">
              <iframe
                title="Truechem Location"
                src="https://www.google.com/maps?q=Ghatkopar+West+Mumbai&output=embed"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

        </div>
        {/* ── End container ── */}

      </section>
      {/* ── End contact-section ── */}

    </div>
    // ── End contact-page ──
  );
}
