import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FiCode, FiServer, FiDatabase, FiTool
} from 'react-icons/fi';
import './Skills.css';

const categories = [
  {
    icon: <FiCode />,
    title: 'Frontend',
    color: '#6366f1',
    bg: '#eef2ff',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Material UI', level: 82 },
      { name: 'HTML / CSS', level: 92 },
    ],
  },
  {
    icon: <FiServer />,
    title: 'Backend',
    color: '#ec4899',
    bg: '#fdf2f8',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Nest.js', level: 78 },
      { name: 'Express.js', level: 83 },
      { name: 'REST APIs', level: 88 },
      { name: 'Prisma ORM', level: 82 },
    ],
  },
  {
    icon: <FiDatabase />,
    title: 'Database',
    color: '#06b6d4',
    bg: '#ecfeff',
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    icon: <FiTool />,
    title: 'Tools',
    color: '#f59e0b',
    bg: '#fffbeb',
    skills: [
      { name: 'Redux Toolkit', level: 85 },
      { name: 'Context API', level: 88 },
      { name: 'Git', level: 88 },
      { name: 'Figma', level: 75 },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Technical Skills</div>
          <h2 className="section-title">My <span>Tech Stack</span></h2>
          <p className="section-subtitle">A comprehensive overview of the technologies and tools I work with daily.</p>
        </div>

        <motion.div
          ref={ref}
          className="skills-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {categories.map(({ icon, title, color, bg, skills }) => (
            <div className="skill-card" key={title}>
              <div className="skill-card-header">
                <span className="skill-cat-icon" style={{ color, background: bg }}>{icon}</span>
                <h3 className="skill-cat-title">{title}</h3>
              </div>
              <div className="skill-bars">
                {skills.map(({ name, level }, i) => (
                  <SkillBar key={name} name={name} level={level} color={color} delay={i * 0.08} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
