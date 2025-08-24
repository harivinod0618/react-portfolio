import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const data = [
  {
    title: 'Online Music Streaming',
    desc: 'A Online Music PaltForm for better user experience',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    demo: '#',
    repo: 'https://github.com/harivinod0618/Online-Music-Streaming',
  },
  {
    title: 'Comment System (MERN + Firebase Auth)',
    desc: 'Admin uploads posts, users like/comment; role-based UI.',
    tech: ['React', 'Node', 'MongoDB', 'Firebase'],
    demo: '#',
    repo: 'https://github.com/harivinod0618/article-hub',
  },
  {
    title: 'ML Project - Future Crime Rate Prediction',
    desc: 'A ML model that prodicts are where there is high chance of increase crime',
    tech: ['Python', 'ML models'],
    demo: '#',
    repo: 'https://github.com/harivinod0618/IDP-project',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section__title"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid cards">
          {data.map((p, i) => (
            <motion.article
              key={p.title}
              className="card card--project"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="card__title">{p.title}</h3>
              <p className="card__desc">{p.desc}</p>
              <div className="chips">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="card__actions">
                <a className="btn btn--sm" href={p.demo} target="_blank" rel="noreferrer">
                  <FiExternalLink /> Live
                </a>
                <a className="btn btn--sm btn--outline" href={p.repo} target="_blank" rel="noreferrer">
                  <FiGithub /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
