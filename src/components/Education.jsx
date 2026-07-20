import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBookOpen } from 'react-icons/fi';
import './Education.css';

const education = [
  {
    course: 'Full Stack Web Development',
    school: 'Masai School',
    location: 'Bangalore, Karnataka',
    period: 'May 2022 – Mar 2023',
    color: '#6366f1',
  },
  {
    course: 'Bachelor of Computer Application',
    school: 'Yashwantrao Chavan Open University',
    location: 'Mumbai, Maharashtra',
    period: 'June 2020 – Feb 2023',
    color: '#ec4899',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Education</div>
          <h2 className="section-title">Academic <span>Background</span></h2>
          <p className="section-subtitle">Where I built the foundations I code on every day.</p>
        </div>

        <motion.div
          ref={ref}
          className="education-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.course}
              className="edu-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="edu-icon" style={{ color: edu.color, background: `${edu.color}18` }}>
                <FiBookOpen />
              </span>
              <h3 className="edu-course">{edu.course}</h3>
              <p className="edu-school">{edu.school}</p>
              <div className="edu-meta">
                <span><FiCalendar size={12} />{edu.period}</span>
                <span><FiMapPin size={12} />{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
