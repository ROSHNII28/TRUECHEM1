import { useEffect } from 'react';
import { FaHandshake, FaIndustry, FaWarehouse } from 'react-icons/fa';
import {
  MdArrowForward, MdBusiness,
  MdLocalShipping,
  MdLocationOn, MdSupportAgent,
  MdVerified,
  MdVisibility
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../styles/About.css';

/* ── Core Values ── */
const values = [
  {
    icon: <MdVerified />,
    title: 'Quality First',
    desc: 'All products undergo rigorous quality verification against international standards before distribution.',
  },
  {
    icon: <MdSupportAgent />,
    title: 'Technical Support',
    desc: 'Our expert team offers on-site and remote guidance for product application and troubleshooting.',
  },
  {
    icon: <MdLocalShipping />,
    title: 'Timely Delivery',
    desc: 'Strategic warehousing in Bhiwandi ensures rapid, reliable dispatches across India.',
  },
  {
    icon: <FaHandshake />,
    title: 'Client-Centric',
    desc: 'We build lasting relationships through transparent communication and tailored supply solutions.',
  },
];

/* ── Locations ── */
const officeLocations = [
  {
    city: 'Mumbai',
    role: 'Head Office',
    detail: '101, Rajasthan Technical Centre, LBS Marg, Ghatkopar West – 400086',
    img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80',
  },
  {
    city: 'Bhiwandi',
    role: 'Warehouse & Distribution',
    detail: 'State-of-the-art storage facility for bulk inventory and dispatch.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    city: 'Pan-India',
    role: 'Sales Network',
    detail: 'Active sales presence across Gujarat, Rajasthan, Maharashtra, and more.',
    img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80',
  },
];

/* ── Mission & Vision ── */
const missionPoints = [
  'Supplying quality materials, building a stronger future',
  'Your trusted partner for premium construction chemicals',
  'Delivering the foundation for your success',
  'Providing raw materials for solid and reliable structures',
  'Innovative materials for modern builders',
  'Quality materials, backed by expertise',
];

const visionPoints = [
  'Empowering manufacturers with innovative and sustainable solutions',
  'Delivering quality, reliability, and trust in every shipment',
  'Becoming the preferred partner for manufacturing companies',
  'One-stop solution for all construction material needs',
  'Building trust and delivering excellence — materials that turn vision into reality',
];

// Scroll reveal hook
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function About() {
  useScrollReveal();

  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <img
          className="page-hero-img"
          src=""
          alt="Construction site"
          loading="eager"
        />
        <div className="container page-hero-inner">
          <span className="section-label animate-fade-down">About TRUECHEM</span>
          <h1 className="animate-fade-up">
            Built on Trust.<br />
            <em>Driven by Quality.</em>
          </h1>
          <p className="animate-fade-up anim-delay-1">
            For over a decade, TRUECHEM has been at the forefront of specialty chemical
            supply in India — connecting global manufacturers with local industry.
          </p>
          <div className="hero-accent-bar animate-fade-up anim-delay-1">
            <span />
            <span />
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">

            <div className="about-intro-text reveal reveal-left">
              <span className="section-label">Our Story</span>
              <h2>One of India's Most Trusted Chemical Importers</h2>
              <div className="divider" style={{ margin: '20px 0 24px' }} />
              <p>
                TRUECHEM is engaged in the import, distribution and stocking of specialty
                construction chemicals. We serve manufacturers, contractors, and distributors
                across India — ensuring they always have access to the right product at the
                right time.
              </p>
              <p style={{ marginTop: '16px' }}>
                With our central warehouse in Bhiwandi and offices across multiple cities,
                we are positioned to deliver with speed and precision. Our team combines
                deep industry knowledge with a passion for client satisfaction.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }}>
                Contact Our Team <MdArrowForward />
              </Link>
            </div>

            <div className="about-intro-visual reveal reveal-right">
              {/* Image collage */}
              <div className="story-img-collage">
                <div className="story-img story-img-main">
                  <img
                    src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=80"
                    alt="Chemical processing"
                    loading="lazy"
                  />
                </div>
                <div className="story-img story-img-sm">
                  <img
                    src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=80"
                    alt="Warehouse operations"
                    loading="lazy"
                  />
                </div>
               
              </div>

              {/* Stat cards */}
              <div className="intro-stat-grid">
                {[
                  { icon: <FaIndustry />, val: '30+', lbl: 'Products Stocked' },
                  { icon: <MdVerified />, val: '500+', lbl: 'Happy Clients' },
                  { icon: <FaWarehouse />, val: '1', lbl: 'Major Warehouse' },
                  { icon: <MdBusiness />, val: '15+', lbl: 'Cities Served' },
                ].map(({ icon, val, lbl }) => (
                  <div className="intro-stat-card" key={lbl}>
                    <div className="isc-icon">{icon}</div>
                    <span className="isc-val">{val}</span>
                    <span className="isc-lbl">{lbl}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section mv-section">
        <div className="container">
          <div className="section-header centered reveal reveal-up">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Built on Purpose, Driven by Values</h2>
            <div className="divider centered" />
          </div>

          <div className="mv-cards">
            {/* Mission */}
            <div className="mv-card reveal reveal-left">
              <div className="mv-title">
                <div className="mv-icon"><MdVerified /></div>
                <h3>Our Mission</h3>
              </div>
              <ul>
                {missionPoints.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="mv-card reveal reveal-right" style={{ '--reveal-delay': '0.1s' }}>
              <div className="mv-title">
                <div className="mv-icon"><MdVisibility /></div>
                <h3>Our Vision</h3>
              </div>
              <ul>
                {visionPoints.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header centered reveal reveal-up">
            <span className="section-label">Core Values</span>
            <h2 className="section-title">What Sets Us Apart</h2>
            <div className="divider centered" />
          </div>

          <div className="grid-4">
            {values.map(({ icon, title, desc }, i) => (
              <div
                className="value-card reveal reveal-up"
                style={{ '--reveal-delay': `${i * 0.1}s` }}
                key={title}
              >
                <div className="value-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="section locations-section">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-label">Presence</span>
            <h2 className="section-title">Our Locations</h2>
            <div className="divider" />
          </div>

          <div className="locations-grid">
            {officeLocations.map(({ city, role, detail, img }, i) => (
              <div
                className="location-card reveal reveal-up"
                style={{ '--reveal-delay': `${i * 0.12}s` }}
                key={city}
              >
                <div className="loc-img">
                  <img src={img} alt={city} loading="lazy" />
                  <div className="loc-img-overlay" />
                </div>
                <div className="loc-content">
                  <div className="loc-icon"><MdLocationOn /></div>
                  <h3>{city}</h3>
                  <span className="loc-role">{role}</span>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
