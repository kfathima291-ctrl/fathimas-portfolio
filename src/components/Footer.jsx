import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Fathima Khan</h2>

          <p className="footer-tagline">
            Turning ideas into meaningful digital experiences.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/kfathima291-ctrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/fatima-khan-9b92ab331"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:kfathima291@gmail.com">
              Email
            </a>
          </div>

          <div className="footer-divider"></div>

          <p className="footer-copyright">
            © {new Date().getFullYear()} Fathima Khan.
            All Rights Reserved.
          </p>

          <p className="footer-made">
            Designed and developed with care ♡
          </p>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;