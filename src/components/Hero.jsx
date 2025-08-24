// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section id="hero" className="section hero">
//       <div className="container hero__content">
//         <motion.h1
//           className="hero__title"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Hi, I'm{' '}
//           <motion.span
//             className="hero__name"
//             initial={{ backgroundPosition: '200% center' }}
//             animate={{ backgroundPosition: '0% center' }}
//             transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
//           >
//             Hari Vinod
//           </motion.span>
//         </motion.h1>

//         <motion.p
//           className="hero__subtitle"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         >
//           Final-year B.Tech Computer Science student | MERN Stack Developer | Machine Learning Enthusiast
//         </motion.p>

//         <motion.div
//           className="hero__cta"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1, duration: 0.6 }}
//         >
//           <a className="btn" href="#projects">View My Work</a>
//           <a className="btn btn--outline" href="#contact">Contact Me</a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import { motion } from 'framer-motion';

const waveAnimation = {
  initial: { y: 0 },
  animate: (i) => ({
    y: [0, -15, 0], // jumping wave effect
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: 'loop',
      delay: i * 0.1, // stagger effect
    },
  }),
};

export default function Hero() {
  const name = "Hari Vinod".split("");

  return (
    <section id="hero" className="section hero">
      <div className="container hero__content">
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="hero__name">
            {name.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={waveAnimation}
                initial="initial"
                animate="animate"
                className="hero__letter"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>


            

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Final-year B.Tech Computer Science student | MERN Stack Developer | Machine Learning Enthusiast
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a className="btn" href="#projects">View My Work</a>
          <a className="btn btn--outline" href="#contact">Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}
