import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiLock } from 'react-icons/fi';
import './Projects.css';

const EcommerceIllustration = () => (
  <svg width="110" height="90" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="94" height="60" rx="8" fill="white" fillOpacity="0.15"/>
    <rect x="8" y="8" width="94" height="18" rx="8" fill="white" fillOpacity="0.2"/>
    <rect x="16" y="14" width="30" height="6" rx="3" fill="white" fillOpacity="0.7"/>
    <rect x="76" y="14" width="18" height="6" rx="3" fill="white" fillOpacity="0.5"/>
    <rect x="16" y="34" width="22" height="22" rx="6" fill="white" fillOpacity="0.25"/>
    <rect x="44" y="34" width="22" height="22" rx="6" fill="white" fillOpacity="0.25"/>
    <rect x="72" y="34" width="22" height="22" rx="6" fill="white" fillOpacity="0.25"/>
    <rect x="18" y="50" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.5"/>
    <rect x="46" y="50" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.5"/>
    <rect x="74" y="50" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.5"/>
    <rect x="30" y="74" width="50" height="8" rx="4" fill="white" fillOpacity="0.35"/>
  </svg>
);

const HrmsIllustration = () => (
  <svg width="110" height="90" viewBox="0 0 110 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="40" height="70" rx="7" fill="white" fillOpacity="0.15"/>
    <rect x="54" y="8" width="48" height="32" rx="7" fill="white" fillOpacity="0.15"/>
    <rect x="54" y="46" width="48" height="32" rx="7" fill="white" fillOpacity="0.15"/>
    <circle cx="28" cy="26" r="8" fill="white" fillOpacity="0.3"/>
    <rect x="16" y="38" width="24" height="3" rx="1.5" fill="white" fillOpacity="0.5"/>
    <rect x="20" y="44" width="16" height="3" rx="1.5" fill="white" fillOpacity="0.35"/>
    <rect x="14" y="52" width="28" height="3" rx="1.5" fill="white" fillOpacity="0.25"/>
    <rect x="14" y="58" width="20" height="3" rx="1.5" fill="white" fillOpacity="0.25"/>
    <rect x="14" y="64" width="24" height="3" rx="1.5" fill="white" fillOpacity="0.25"/>
    <rect x="62" y="17" width="32" height="5" rx="2.5" fill="white" fillOpacity="0.5"/>
    <rect x="62" y="25" width="22" height="4" rx="2" fill="white" fillOpacity="0.3"/>
    <rect x="62" y="32" width="28" height="4" rx="2" fill="white" fillOpacity="0.3"/>
    <rect x="62" y="54" width="16" height="14" rx="4" fill="white" fillOpacity="0.25"/>
    <rect x="82" y="54" width="12" height="14" rx="4" fill="white" fillOpacity="0.25"/>
    <rect x="62" y="70" width="32" height="4" rx="2" fill="white" fillOpacity="0.3"/>
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'MaintainEase',
    category: 'SaaS Platform',
    desc: 'A SaaS platform for housing society management — maintenance billing, payment tracking, resident management, ledger accounting, and financial reporting.',
    highlights: [
      'Role-based dashboards for administrators, accountants, committee members, and residents',
      'Scalable PostgreSQL architecture designed with Prisma ORM',
      'Automated billing and audit-friendly accounting workflows',
    ],
    impact: ['Live in production', 'Designed & built end to end'],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    live: 'https://maintainease.in',
    confidential: false,
    logo: 'https://maintainease.in/logo.webp',
    gradient: null,
    illustration: null,
  },
  {
    id: 2,
    title: 'Enterprise E-Commerce Platform',
    category: 'Frontend · SSR',
    desc: 'Enterprise-scale e-commerce features for an international client, built around SEO, rendering performance, and reusable UI.',
    highlights: [
      'Migrated 13+ SEO-critical pages from CSR to Server-Side Rendering',
      'Efficient state management across complex flows with Redux Toolkit',
      'Reusable responsive components integrated with GraphQL APIs',
    ],
    impact: ['13+ pages to SSR', '~20% faster page loads'],
    tags: ['Next.js', 'TypeScript', 'Redux Toolkit', 'GraphQL'],
    live: null,
    confidential: true,
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    illustration: <EcommerceIllustration />,
  },
  {
    id: 3,
    title: 'HRMS Portal',
    category: 'Frontend',
    desc: 'A Human Resource Management System for a mid-size company, covering employee onboarding, attendance, leave management, payroll processing, and performance reviews.',
    highlights: [],
    impact: [],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    live: null,
    confidential: true,
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    illustration: <HrmsIllustration />,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">My Work</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">Production work and products I've shipped — the problem, my contribution, and the impact.</p>
        </div>

        <motion.div
          ref={ref}
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="popLayout">
            {projects.map(p => (
              <motion.div
                key={p.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`project-visual${p.logo ? ' project-visual--logo' : ''}`} style={{ background: p.gradient || undefined }}>
                  {p.logo
                    ? <img src={p.logo} alt={p.title} className="project-logo" />
                    : p.illustration
                  }
                  {p.confidential && (
                    <div className="confidential-badge"><FiLock size={11} /> Confidential</div>
                  )}
                  <div className="project-links">
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="proj-link"><FiExternalLink /></a>}
                  </div>
                </div>
                <div className="project-body">
                  <span className="project-cat">{p.category}</span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  {p.highlights?.length > 0 && (
                    <ul className="project-highlights">
                      {p.highlights.map(h => (
                        <li key={h}><span className="proj-bullet" />{h}</li>
                      ))}
                    </ul>
                  )}
                  {p.impact?.length > 0 && (
                    <div className="project-impact">
                      {p.impact.map(i => <span key={i} className="impact-chip">{i}</span>)}
                    </div>
                  )}
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
