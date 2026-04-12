import { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import indiamartLogo from '../assets/indiamart-logo.png';
import logo from '../assets/Truechem logo.png';
import '../styles/Navbar.css';

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={handleLinkClick}>
          <span className="brand-icon">
            <img src={logo} alt="TrueChem Logo" className="brand-logo" />
          </span>
          <span className="brand-name">TRUE<span>CHEM</span></span>
        </NavLink>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

       <ul className={`navbar-links${open ? ' open' : ''}`}>
  {links.map(({ to, label }) => (
    <li key={to}>
      <NavLink
        to={to}
        end={to === '/'}
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        onClick={handleLinkClick}
      >
        {label}
      </NavLink>
    </li>
  ))}

  {/* LinkedIn */}
  <li>
    <a href="https://in.linkedin.com/in/punit-vaghani-363a8b26" target="_blank" rel="noreferrer" className="social-link linkedin">
      <FaLinkedin />
    </a>
  </li>

  {/* IndiaMART */}
  <li className="im-wrapper">
    <a href="https://www.indiamart.com/true-chem/" target="_blank" rel="noreferrer" className="im-icon" title="Visit us on IndiaMART">
      <img src={indiamartLogo} alt="IndiaMART" className="im-logo-img" />
    </a>
  </li>
</ul>
      </div>
    </nav>
  );
}