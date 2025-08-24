import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Hari Vinod. All rights reserved.</p>
        <div className="footer__links">
          <a
            href="https://github.com/harivinod0618"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ marginRight: "5px" }} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harivinod-n-6b514132a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin style={{ marginRight: "5px" }} />
            LinkedIn
          </a>
          <a href="mailto:harivinod1018@gmail.com">
            <FaEnvelope style={{ marginRight: "5px" }} />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
