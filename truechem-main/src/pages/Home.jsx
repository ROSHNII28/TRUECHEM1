import { useEffect } from 'react';
import { FaAward, FaFlask, FaWarehouse } from 'react-icons/fa';
import {
  MdArrowForward,
  MdHandshake,
  MdInventory2,
  MdLocalShipping,
  MdPublic,
  MdScience,
  MdSupportAgent,
  MdVerified,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

import taianGreen from '../assets/brands/green.png';
import hlc from '../assets/brands/hlc.png';
import jinJi from '../assets/brands/Jinji.png';
import wacker from '../assets/brands/wacker.png';
import yicheng from '../assets/brands/YichengJiaHua.png';

/* ─── Data ─────────────────────────────────────────────────────── */

const brandLogos = [
  { src: taianGreen, alt: "Tai'an Green",              name: "Tai'an Green"   },
  { src: jinJi,      alt: 'Jin Ji',                    name: 'Jin Ji'         },
  { src: yicheng,    alt: 'YiChengJiaHua HPMC & RDP',  name: 'YiChengJiaHua' },
  { src: wacker,     alt: 'WACKER',                    name: 'WACKER'         },
  { src: hlc,        alt: 'HLC Hualian Top Technology', name: 'HLC Hualian'   },
];

const missionPoints = [
  {
    icon: <MdVerified />,
    title: 'Quality Assurance',
    desc: 'Every product meets stringent international quality standards before reaching our clients.',
  },
  {
    icon: <MdInventory2 />,
    title: 'Wide Product Range',
    desc: 'From RDP and HPMC to SBR Latex — a comprehensive portfolio for construction and paint industries.',
  },
  {
    icon: <MdSupportAgent />,
    title: 'Technical Support',
    desc: 'Our team provides expert guidance on product selection, application, and dosage optimization.',
  },
  {
    icon: <MdLocalShipping />,
    title: 'Timely Delivery',
    desc: 'Backed by a strategic warehouse in Bhiwandi ensuring pan-India swift dispatch.',
  },
];

const visionPoints = [
  {
    icon: <MdHandshake />,
    title: 'Trusted Partnerships',
    desc: 'Building long-term relationships with manufacturers, contractors, and distributors across India.',
  },
  {
    icon: <MdPublic />,
    title: 'National Reach',
    desc: 'Expanding our footprint to become the go-to specialty chemical supplier across every Indian city.',
  },
  {
    icon: <FaAward />,
    title: 'Industry Leadership',
    desc: 'Setting benchmarks in product reliability, pricing, and after-sales technical support.',
  },
  {
    icon: <MdScience />,
    title: 'Innovation First',
    desc: 'Continuously sourcing the latest specialty chemical solutions to stay ahead of evolving market needs.',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Happy Clients'   },
  { value: 30,  suffix: '+', label: 'Products'        },
  { value: 15,  suffix: '+', label: 'Cities Served'   },
  { value: 10,  suffix: '+', label: 'Years Experience' },
];

const heroImages = [
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=85', alt: 'Construction site'  },
  { src: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=700&q=85', alt: 'Chemical lab'       },
  { src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=700&q=85', alt: 'Warehouse'          },
  { src: 'https://civilengpro.com/wp-content/uploads/2021/06/cement-mortar-1-768x403.jpg', alt: 'Mortar mix'  },
  { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=85', alt: 'Modern construction' },
];

const galleryImages = [
  { src: 'https://i.pinimg.com/1200x/e6/8d/99/e68d99e0447abdab0fbdf7249834bc25.jpg', alt: 'RDP Polymer'      },
  { src: 'https://i.pinimg.com/736x/97/5a/61/975a617c0fa264bbc6dd498ac732c39d.jpg', alt: 'Construction Mix'  },
  { src: 'https://i.pinimg.com/736x/40/dc/91/40dc912d2694d282ac251a5176a936f1.jpg', alt: 'Specialty Coating' },
  { src: 'https://civilengpro.com/wp-content/uploads/2021/06/cement-mortar-1-768x403.jpg', alt: 'Cement Mortar' },
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', alt: 'Site Application' },
];

/* ─── Hooks ─────────────────────────────────────────────────────── */

function useScrollReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}

function useCountUp() {
  useEffect(() => {
    const statEls = document.querySelectorAll('.stat-value[data-target]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || '';
            const duration = 1600;
            const startTime = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.ceil(eased * target) + suffix;
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    statEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useRipple() {
  useEffect(() => {
    const handler = (e) => {
      const btn = e.currentTarget;
      const circle = document.createElement('span');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      circle.className = 'ripple-circle';
      Object.assign(circle.style, {
        width: size + 'px', height: size + 'px',
        left: (e.clientX - rect.left - size / 2) + 'px',
        top:  (e.clientY - rect.top  - size / 2) + 'px',
      });
      btn.appendChild(circle);
      circle.addEventListener('animationend', () => circle.remove());
    };
    const btns = document.querySelectorAll('.btn');
    btns.forEach((b) => b.addEventListener('click', handler));
    return () => btns.forEach((b) => b.removeEventListener('click', handler));
  }, []);
}

function useTilt(selector) {
  useEffect(() => {
    const cards = document.querySelectorAll(selector);
    const onMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 12;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -12;
      card.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-8px)`;
    };
    const onLeave = (e) => { e.currentTarget.style.transform = ''; };
    cards.forEach((c) => { c.addEventListener('mousemove', onMove); c.addEventListener('mouseleave', onLeave); });
    return () => cards.forEach((c) => { c.removeEventListener('mousemove', onMove); c.removeEventListener('mouseleave', onLeave); });
  }, [selector]);
}

/* ─── Component ─────────────────────────────────────────────────── */

export default function Home() {
  useScrollReveal('.reveal');
  useCountUp();
  useRipple();
  useTilt('.mission-card');

  return (
    <div className="home">

      {/* ══ HERO ══ */}
      <section className="hero">

        {/* Full-bleed scrolling image strip */}
        <div className="hero-bg-images" aria-hidden="true">
          <div className="hero-bg-track">
            {[...heroImages, ...heroImages, ...heroImages].map((img, i) => (
              <div className="hero-bg-item" key={i}>
                <img src={img.src} alt="" loading="eager" />
              </div>
            ))}
          </div>
          {/* Dark gradient overlay — text legibility */}
          <div className="hero-bg-overlay" />
        </div>

        {/* Dot-grid on top of images */}
        <div className="hero-bg-pattern" aria-hidden="true" />

        {/* Particles */}
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="particle" style={{ '--i': i }} />
          ))}
        </div>

        <div className="container hero-inner">
          <div className="hero-badge animate-fade-down">
            <FaFlask className="badge-icon" />
            <span>India's Trusted Chemical Supplier</span>
          </div>

          <h1 className="hero-heading animate-fade-up anim-delay-1">
            <span className="hero-heading-line">Innovative Construction</span>
            <br />
            <span className="hero-heading-line hero-heading-accent">Chemical Solutions</span>
          </h1>

          <p className="hero-sub animate-fade-up anim-delay-2">
            Trusted importer, distributor and stockist of specialty chemicals
            serving the construction and paint industries across India.
          </p>

          <div className="hero-actions animate-fade-up anim-delay-3">
            <Link to="/products" className="btn btn-primary">
              Explore Products <MdArrowForward className="btn-icon" />
            </Link>
            <Link to="/contact" className="btn btn-outline-hero">
              Get in Touch
            </Link>
          </div>

          <div className="hero-stats animate-fade-up anim-delay-4">
            {stats.map(({ value, suffix, label }, i) => (
              <div className="stat" key={label}>
                <span
                  className="stat-value"
                  data-target={value}
                  data-suffix={suffix}
                  style={{ '--stat-delay': `${0.7 + i * 0.13}s` }}
                >
                  0{suffix}
                </span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative bottom edge */}
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--white,#fff)" />
          </svg>
        </div>
      </section>

      {/* ══ GALLERY STRIP ══ */}
      <section className="gallery-strip">
        <div className="gallery-track">
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item-overlay"><span>{img.alt}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section className="section mission-section">
        <div className="container">
          <div className="section-header reveal reveal-up">
            <span className="section-label">Our Mission</span>
            <h2 className="section-title">What We Stand For</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Delivering premium specialty chemicals with unmatched service across every corner of India.
            </p>
          </div>
          <div className="grid-4 mission-grid">
            {missionPoints.map(({ icon, title, desc }, i) => (
              <div
                className="mission-card reveal reveal-up"
                style={{ '--reveal-delay': `${i * 0.11}s` }}
                key={title}
              >
                <div className="mission-card-glow" aria-hidden="true" />
                <div className="mission-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT STRIP ══ */}
      <section className="about-strip">
        <div className="container">
          <div className="about-strip-inner">
            <div className="about-strip-text reveal reveal-left">
              <span className="section-label">Who We Are</span>
              <h2>One of India's Most Trusted<br />Chemical Importers</h2>
              <div className="divider" />
              <p>
                TRUECHEM is a premier importer, distributor and stockist of specialty construction
                chemicals. With a state-of-the-art warehouse in Bhiwandi, Mumbai, and offices across
                multiple cities, we serve clients with speed, reliability and expertise.
              </p>
              <ul className="strip-list">
                {[
                  'ISO-compliant sourcing & quality checks',
                  'Pan-India distribution network',
                  'Expert technical advisory team',
                  'Direct importer — competitive pricing',
                ].map((item, i) => (
                  <li key={item} style={{ '--list-delay': `${i * 0.08}s` }}>
                    <MdVerified className="check-icon" />{item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '28px' }}>
                Learn More About Us <MdArrowForward />
              </Link>
            </div>

            <div className="about-strip-visual reveal reveal-right">
              <div className="about-img-grid">
                <div className="about-img about-img-main">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80" alt="Construction site" loading="lazy" />
                </div>
                <div className="about-img about-img-sm1">
                  <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&q=80" alt="Chemical lab" loading="lazy" />
                </div>
                <div className="about-img about-img-sm2">
                  <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=80" alt="Warehouse" loading="lazy" />
                </div>
              </div>
              <div className="visual-badge vb-1">
                <FaWarehouse className="vc-icon" />
                <span>Bhiwandi<br />Warehouse</span>
              </div>
              <div className="visual-badge vb-2">
                <MdPublic className="vc-icon" />
                <span>Pan-India<br />Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VISION ══ */}
      <section className="section vision-section">
        <div className="container">
          <div className="section-header centered reveal reveal-up">
            <span className="section-label">Our Vision</span>
            <h2 className="section-title">Where We're Headed</h2>
            <div className="divider centered" />
            <p className="section-subtitle">
              Shaping the future of specialty chemicals in India through innovation and reliability.
            </p>
          </div>
          <div className="vision-grid">
            {visionPoints.map(({ icon, title, desc }, i) => (
              <div
                className="vision-card reveal reveal-up"
                style={{ '--reveal-delay': `${i * 0.11}s` }}
                key={title}
              >
                <div className="vision-num">0{i + 1}</div>
                <div className="vision-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BRANDS ══ */}
      <section className="brands-section reveal reveal-up">
        <div className="container">
          <div className="section-header centered">
            <span className="section-label">Our Suppliers</span>
            <h2 className="section-title brands-title">Trusted Global Brands</h2>
            <div className="divider centered" />
            <p className="section-subtitle">
              We partner with world-class manufacturers to bring you only the best.
            </p>
          </div>
          <div className="brands-logos-wrap">
            {brandLogos.map(({ src, alt, name }) => (
              <div className="brand-logo-card" key={name}>
                <div className="brand-logo-inner">
                  <img src={src} alt={alt} loading="lazy" />
                </div>
                <span className="brand-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRY BANNER ══ */}
      <section className="industry-banner reveal reveal-up">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=85"
          alt="Modern construction"
          className="industry-banner-img"
          loading="lazy"
        />
        <div className="industry-banner-overlay">
          <h2>Powering India's Construction &amp; Paint Industries</h2>
          <p>From foundation to finish — TRUECHEM has you covered.</p>
          <a
            href="https://www.indiamart.com/true-chem/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-banner"
          >
            View on IndiaMART <MdArrowForward />
          </a>
        </div>
      </section>

    </div>
  );
}
