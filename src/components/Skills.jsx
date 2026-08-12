import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FiCode, FiServer, FiDatabase, FiTool, FiCpu
} from 'react-icons/fi';
import './Skills.css';

const categories = [
  {
    icon: <FiCode />,
    title: 'Frontend',
    color: '#6366f1',
    bg: '#eef2ff',
    featured: true,
    note: 'Core expertise',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Redux Toolkit', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Material UI', level: 82 },
      { name: 'HTML5 / CSS3', level: 92 },
    ],
  },
  {
    icon: <FiServer />,
    title: 'Backend',
    color: '#ec4899',
    bg: '#fdf2f8',
    note: 'Supporting full-stack',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'REST APIs', level: 88 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    icon: <FiDatabase />,
    title: 'Database',
    color: '#06b6d4',
    bg: '#ecfeff',
    note: 'Data layer',
    skills: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'Prisma ORM', level: 82 },
    ],
  },
  {
    icon: <FiTool />,
    title: 'Tools',
    color: '#f59e0b',
    bg: '#fffbeb',
    note: 'Daily workflow',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Figma', level: 75 },
      { name: 'Builder.io', level: 78 },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 92 },
    ],
  },
  {
    icon: <FiCpu />,
    title: 'AI-Assisted Development',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    note: 'Productivity tooling',
    skills: [
      { name: 'Claude Code', level: 90 },
      { name: 'Cursor', level: 85 },
      { name: 'ChatGPT', level: 88 },
      { name: 'GitHub Copilot', level: 82 },
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
          <h2 className="section-title">Frontend-first <span>Tech Stack</span></h2>
          <p className="section-subtitle">React.js, Next.js and TypeScript are where I go deepest — with full-stack tooling to support it.</p>
        </div>

        <motion.div
          ref={ref}
          className="skills-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {categories.map(({ icon, title, color, bg, skills, featured, note }) => (
            <div className={`skill-card${featured ? ' skill-card--featured' : ''}`} key={title}>
              <div className="skill-card-header">
                <span className="skill-cat-icon" style={{ color, background: bg }}>{icon}</span>
                <div className="skill-cat-heading">
                  <h3 className="skill-cat-title">{title}</h3>
                  {note && <span className="skill-cat-note">{note}</span>}
                </div>
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
