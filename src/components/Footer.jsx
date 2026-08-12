import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <Link to="hero" smooth duration={600} className="footer-logo">
            <span>P</span>rathamesh Chavan
          </Link>
          <p className="footer-tagline">Frontend Engineer · React.js, Next.js & TypeScript</p>
          <div className="footer-socials">
            <a href="https://github.com/Prathameshschavan" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/prathamesh-chavan-1886202a5/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Prathamesh Chavan</p>
          <p className="footer-made">Made with <FiHeart className="heart" /> using React</p>
        </div>
      </div>
    </footer>
  );
}
