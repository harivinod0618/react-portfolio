// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';


// export default function Contact() {
//   const formRef = useRef(null);
//   const [status, setStatus] = useState('');

//   const onSubmit = (e) => {
//     e.preventDefault();
//     setStatus('Sending...');

//     // IMPORTANT: Replace the placeholders with your actual EmailJS IDs
//     emailjs.sendForm(
//       'service_e7js11p',
//       'template_t59709q',
//       formRef.current,
//       'nq7wRoGyZM_qAkJ4O'
//     ).then(() => {
//       setStatus('Message sent successfully!');
//       formRef.current.reset();
//     }).catch(() => {
//       setStatus('Failed to send. Please try again.');
//     });
//   };

//   return (
//     <section id="contact" className="section">
//       <div className="container">
//         <motion.h2
//           className="section__title"
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Contact
//         </motion.h2>

//         <motion.form
//           ref={formRef}
//           onSubmit={onSubmit}
//           className="form"
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 15 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <input type="text" name="user_name" placeholder="Your Name" id="name" required />
//           <input type="email" name="user_email" placeholder="Your Email" id="email" required />
//           <textarea name="message" placeholder="Your Message"id="message" rows="5" required />
//           {/* Hidden input to direct email (configure template to use this) */}
//           <input type="hidden" name="to_email" value="harivinod1018@gmail.com" />
//           <button type="submit" className="btn">Send Message</button>
//           {status && <div className="form__status">{status}</div>}
//         </motion.form>

        
//       </div>
//     </section>
//   );
// }




import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const name = formRef.current.user_name.value;
    const email = formRef.current.user_email.value;
    const message = formRef.current.message.value;

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        user_name: name,
        user_email: email,
        message: message,
        to_email: 'harivinod1018@gmail.com', // or from env variable if preferred
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('EmailJS Success:', result.text);
      setStatus('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error.text);
      setStatus('Failed to send. Please try again.');
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2
          className="section__title"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          className="form"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Your Name"
            required
            autoComplete="name"
          />
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Your Email"
            required
            autoComplete="email"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows="5"
            required
            autoComplete="off"
          />
          <button type="submit" className="btn">Send Message</button>
          {status && <div className="form__status">{status}</div>}
        </motion.form>
      </div>
    </section>
  );
}
