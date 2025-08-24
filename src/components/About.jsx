// import React from 'react';
// import { motion } from 'framer-motion';

// export default function About() {
//   return (
//     <section id="about" className="section">
//       <div className="container">
//         <motion.h2
//           className="section__title"
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           className="section__text center"
//           whileInView={{ opacity: 1 }}
//           initial={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           I am a final-year <strong>B.Tech Computer Science</strong> student with
//           a strong foundation in programming and web development. My technical
//           skills include <strong>Java</strong>, <strong>C</strong>, <strong>Python (basics)</strong>,{' '}
//           <strong>React.js</strong>, and <strong>Machine Learning</strong>. I enjoy solving problems,
//           exploring new technologies, and building applications that deliver practical solutions.
//           My career goal is to become a skilled software developer and continuously improve my
//           expertise in full-stack development and artificial intelligence.
//         </motion.p>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDocumentText } from "react-icons/hi";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section__title"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="section__text center"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          I am a final-year <strong>B.Tech Computer Science</strong> student with
          a strong foundation in programming and web development. My technical
          skills include <strong>Java</strong>, <strong>C</strong>, <strong>Python (basics)</strong>,{' '}
          <strong>React.js</strong>, and <strong>Machine Learning</strong>. I enjoy solving problems,
          exploring new technologies, and building applications that deliver practical solutions.
          My career goal is to become a skilled software developer and continuously improve my
          expertise in full-stack development and artificial intelligence.
        </motion.p>

        {/* Resume Button */}
        <motion.div
          className="resume__link center"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://drive.google.com/file/d/10UMgGDJdUs3L51ceVfOj7U4xlpVfY9FC/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            My Resume<HiOutlineDocumentText />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
