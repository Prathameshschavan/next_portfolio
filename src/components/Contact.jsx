import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import './Contact.css';

const info = [
  { icon: <FiMail />, label: 'Email', val: 'chavanprathamesh.dev@gmail.com', href: 'mailto:chavanprathamesh.dev@gmail.com', color: '#6366f1' },
  { icon: <FiPhone />, label: 'Phone', val: '+91 98-602-04367', href: 'tel:+919860204367', color: '#ec4899' },
  { icon: <FiMapPin />, label: 'Location', val: 'Mumbai, Maharashtra, India', href: null, color: '#06b6d4' },
];

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/Prathameshchavan', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/prathamesh-chavan', label: 'LinkedIn' },
];

const WA_NUMBER = '919860204367';
const WA_MESSAGE = encodeURIComponent("Hi Prathamesh, I came across your portfolio and would love to connect!");

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Let's <span>Work Together</span></h2>
          <p className="section-subtitle">Have a project in mind? I'd love to hear about it. Let's create something amazing together.</p>
        </div>

        <motion.div
          ref={ref}
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info-col">
            <div className="contact-intro">
              <h3>Let's talk!</h3>
              <p>I'm currently available for freelance work and open to full-time opportunities. If you have a project or opportunity that matches my skills, don't hesitate to reach out.</p>
            </div>

            <div className="contact-items">
              {info.map(({ icon, label, val, href, color }) => (
                <div className="contact-item" key={label}>
                  <span className="contact-icon" style={{ color, background: `${color}18` }}>{icon}</span>
                  <div>
                    <p className="contact-label">{label}</p>
                    {href
                      ? <a href={href} className="contact-val">{val}</a>
                      : <p className="contact-val">{val}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              {socials.map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-btn" aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-cta-col">
            <div className="contact-cta-card">
              <div className="cta-icon-wrap">
                <SiWhatsapp />
              </div>
              <h3 className="cta-title">Chat on WhatsApp</h3>
              <p className="cta-desc">
                The fastest way to reach me. Click below and I'll get back to you as soon as possible.
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noreferrer"
                className="wa-btn"
              >
                <SiWhatsapp size={20} />
                Open WhatsApp
              </a>
              <p className="cta-note">Typically replies within a few hours</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
