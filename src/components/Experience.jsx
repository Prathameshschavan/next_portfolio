import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'Skysoft IT Services Private Limited',
    location: 'Noida, UP',
    period: 'March 2023 – Present',
    type: 'Full-time',
    desc: 'Building scalable web applications with React.js and Next.js, focusing on performance, SEO, and pixel-perfect UI implementation for production-grade products.',
    points: [
      'Built scalable web applications using React.js and Next.js, improving performance and code reusability',
      'Implemented SSR for SEO-critical pages (PDP, PLP), improving crawlability and initial load performance',
      'Translated Figma designs into pixel-perfect, responsive UIs using Material UI and Tailwind CSS',
      'Integrated GraphQL APIs for dynamic, data-driven features and optimized component architecture, reducing page load time by 20%',
    ],
    color: '#6366f1',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Career</div>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-subtitle">My professional journey and the companies I've had the pleasure to work with.</p>
        </div>

        <div className="timeline" ref={ref}>
          <div className="timeline-line" />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="timeline-dot" style={{ background: exp.color }} />
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      <FiBriefcase size={13} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="exp-meta-right">
                    <span className="exp-type" style={{ color: exp.color, background: `${exp.color}18` }}>{exp.type}</span>
                    <div className="exp-period"><FiCalendar size={12} />{exp.period}</div>
                    <div className="exp-period"><FiMapPin size={12} />{exp.location}</div>
                  </div>
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <ul className="exp-points">
                  {exp.points.map(pt => (
                    <li key={pt}>
                      <span className="exp-bullet" style={{ background: exp.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
