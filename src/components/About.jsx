import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDownload, FiCode, FiAward } from 'react-icons/fi';
import './About.css';

const stats = [
  { icon: <FiCode />, val: '3+', label: 'Years Coding' },
  { icon: <FiAward />, val: '3+', label: 'Projects Done' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-grid"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="about-image-col">
            <div className="about-img-wrap">
              <img
                src="/my-image.jpg"
                alt="Prathamesh Chavan"
                className="about-img"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="about-img-placeholder"><span>PC</span></div>
              <div className="about-badge">
                <span>👋</span>
                <span>Open to Work</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: 28 }}>
              <div className="section-tag">About Me</div>
              <h2 className="section-title">Passionate about building <span>great products</span></h2>
            </div>

            <p className="about-p">
              Hey there! I'm <strong>Prathamesh Chavan</strong>, a Full Stack Engineer based in Mumbai, Maharashtra.
              I build scalable web applications using React.js, Next.js, and Node.js, with a strong focus on clean UI and system reliability.
            </p>
            <p className="about-p">
              I built and launched <strong>MaintainEase</strong>, a SaaS platform for housing society accounting,
              handling end-to-end development including billing workflows and data integrity.
              I also integrate AI-driven features to automate processes and improve operational efficiency.
            </p>
            <p className="about-p">
              Skilled in performance optimization, SSR, API development, and database integration.
              I'm passionate about turning ideas into reliable, well-crafted products.
            </p>

            <div className="about-stats">
              {stats.map(({ icon, val, label }) => (
                <div className="stat-card" key={label}>
                  <span className="stat-icon">{icon}</span>
                  <p className="stat-val">{val}</p>
                  <p className="stat-label">{label}</p>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/prathamesh_chavan_resume.pdf" download className="btn-primary">
                <FiDownload />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
