import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-blob blob1" />
        <div className="hero-blob blob2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="badge-dot" />
            Available for work
          </motion.div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Prathamesh</span>
            <br />
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'React Developer', 2000,
                'Node.js Engineer', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typed-text"
            />
          </h1>

          <p className="hero-desc">
            Full Stack Engineer with 3+ years of experience building scalable web applications
            using React.js, Next.js, and Node.js, with a strong focus on clean UI and system reliability.
          </p>

          <div className="hero-actions">
            <Link to="projects" smooth duration={600} offset={-80} className="btn-primary">
              View My Work
            </Link>
            <Link to="contact" smooth duration={600} offset={-80} className="btn-outline">
              Get In Touch
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Prathameshchavan" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://linkedin.com/in/prathamesh-chavan" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="hero-photo-ring">
            <div className="hero-photo-inner">
              <img
                src="/my-image.jpg"
                alt="Prathamesh Chavan"
                className="hero-photo"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero-photo-placeholder">
                <span>PC</span>
              </div>
            </div>
          </div>

          <motion.div
            className="float-card card-exp"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="card-icon">🚀</span>
            <div>
              <p className="card-val">3+ Years</p>
              <p className="card-lab">Experience</p>
            </div>
          </motion.div>

          <motion.div
            className="float-card card-projects"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className="card-icon">💼</span>
            <div>
              <p className="card-val">3+</p>
              <p className="card-lab">Projects Done</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Link to="about" smooth duration={600} offset={-80} className="scroll-hint">
        <span>Scroll down</span>
        <FiArrowDown className="scroll-arrow" />
      </Link>
    </section>
  );
}
