import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="section alt">
      <div className="container">
        <motion.h2
          className="section__title"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <motion.div
          className="timeline"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__content">
              <h3>  B.Tech in Computer Science & Engineering</h3>
              <p>Vignan University • Final Year</p>
              <p>Guntur, Andhra Pradesh</p>
              <h3>InterMediate </h3>
              <p>Sri Chaitanya Junior College</p>
              <p>Guntur, Andhra Pradesh</p>
              <h3>Schooling</h3>
              <p>Nandi School</p>
              <p>Pedanandipadu, Guntur, Andhra Pradesh</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
