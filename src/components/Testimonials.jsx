import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CTO, TechCorp Solutions',
    avatar: 'RS',
    color: '#6366f1',
    stars: 5,
    text: 'Prathamesh is an exceptional developer who consistently delivers high-quality work. His ability to architect scalable solutions and communicate clearly with the team made him invaluable to our projects.',
  },
  {
    name: 'Priya Kapoor',
    role: 'Product Manager, StartupXYZ',
    avatar: 'PK',
    color: '#ec4899',
    stars: 5,
    text: 'Working with Prathamesh was a fantastic experience. He has a unique ability to translate complex requirements into elegant solutions. His code is clean, well-documented, and a pleasure to maintain.',
  },
  {
    name: 'Aditya Mehta',
    role: 'Founder, DigitalAgency Co.',
    avatar: 'AM',
    color: '#06b6d4',
    stars: 5,
    text: 'Prathamesh delivered an outstanding e-commerce platform for us. His technical expertise and attention to detail are remarkable. I\'d highly recommend him to anyone looking for a reliable full-stack developer.',
  },
  {
    name: 'Sneha Patil',
    role: 'Lead Designer, CreativeStudio',
    avatar: 'SP',
    color: '#f59e0b',
    stars: 5,
    text: 'Prathamesh bridges the gap between design and development beautifully. He implements pixel-perfect UIs while keeping the codebase maintainable. A rare find who truly understands both worlds.',
  },
  {
    name: 'Vikas Nair',
    role: 'Engineering Manager, FinTech Inc.',
    avatar: 'VN',
    color: '#10b981',
    stars: 5,
    text: 'Brought Prathamesh on as a consultant and was blown away by his professionalism and delivery speed. He solved complex backend performance issues we had struggled with for months, in just days.',
  },
  {
    name: 'Anjali Desai',
    role: 'CEO, EdTech Platform',
    avatar: 'AD',
    color: '#8b5cf6',
    stars: 5,
    text: 'Prathamesh built our entire learning management system from scratch. His full-stack expertise, proactive communication, and commitment to quality exceeded every expectation. Highly recommended!',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Social Proof</div>
          <h2 className="section-title">What Clients <span>Say</span></h2>
          <p className="section-subtitle">Kind words from the people I've had the pleasure to work with.</p>
        </div>

        <motion.div
          ref={ref}
          className="testimonials-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testi-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="testi-stars">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <FiStar key={j} className="star-icon" />
                ))}
              </div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: `${t.color}20`, color: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-role">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
