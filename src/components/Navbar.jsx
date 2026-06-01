import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="hero" smooth duration={600} className="nav-logo">
          <span>P</span>rathamesh
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                offset={-80}
                spy
                activeClass="active"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="contact" smooth duration={600} offset={-80} className="nav-cta" onClick={() => setMenuOpen(false)}>
              Hire Me
            </Link>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </nav>
  );
}
