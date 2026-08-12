import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDownload, FiCode, FiLayers, FiZap } from 'react-icons/fi';
import './About.css';

const stats = [
  { icon: <FiCode />, val: '3+', label: 'Years Frontend' },
  { icon: <FiLayers />, val: '13+', label: 'Pages Moved to SSR' },
  { icon: <FiZap />, val: '~20%', label: 'Faster Page Loads' },
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
              <h2 className="section-title">Frontend Engineer building <span>production-grade UIs</span></h2>
            </div>

            <p className="about-p">
              Hey there! I'm <strong>Prathamesh Chavan</strong>, a <strong>Frontend Engineer</strong> based in Mumbai, Maharashtra,
              with 3+ years of experience building production web applications in <strong>React.js</strong>, <strong>Next.js</strong>,
              and <strong>TypeScript</strong>.
            </p>
            <p className="about-p">
              My day-to-day is reusable component architecture, responsive UI from Figma designs with Tailwind CSS and Material UI,
              state management with Redux Toolkit, and performance work — including migrating SEO-critical pages
              from CSR to <strong>Server-Side Rendering</strong>, which cut page load time by roughly 20%.
            </p>
            <p className="about-p">
              I also work across the stack when a feature needs it — <strong>Node.js</strong>, <strong>GraphQL</strong>,
              <strong> PostgreSQL</strong>, and <strong>Prisma</strong> — which is how I designed and shipped
              <strong> MaintainEase</strong>, a live SaaS platform for housing society management. I use AI tools like
              Claude Code and Cursor to move faster on development, debugging, and code reviews.
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
