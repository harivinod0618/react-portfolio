import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiC, SiTensorflow } from 'react-icons/si';

const items = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'C', icon: <SiC /> },
  { name: 'Python (Basics)', icon: <FaPython /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Machine Learning', icon: <SiTensorflow /> },
];

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <motion.h2
          className="section__title"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="grid cards">
          {items.map((s, i) => (
            <motion.div
              key={s.name}
              className="card center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.04 }}
              viewport={{ once: true }}
            >
              <div className="icon">{s.icon}</div>
              <div className="card__title">{s.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
