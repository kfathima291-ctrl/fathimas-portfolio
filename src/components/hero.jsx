import { motion } from "framer-motion";

import {
  Code2,
  ContactRound,
  Mail,
  ArrowDown,
  Download,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          HELLO, WELCOME TO MY PORTFOLIO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span>Fathima Khan.</span>
        </motion.h1>

        <motion.h2
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A Lifelong Learner with a Passion for Technology.
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Computer Science Engineer | Aspiring Data Scientist | Developer.
          Exploring technology, building meaningful projects and continuously
          learning new things.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >

          <a href="#projects" className="btn-primary">
            Explore My Projects <ArrowDown size={18} />
          </a>

          <a href="/resume.pdf" className="btn-secondary" download>
            Download Resume <Download size={18} />
          </a>

        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <ContactRound />
          </a>

          <a href="mailto:your-email@example.com">
            <Mail />
          </a>

        </motion.div>

      </div>

      {/* Profile Image */}

      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >

        <div className="image-decoration"></div>

        <div
          style={{
            width: "320px",
            height: "390px",
            border: "3px solid purple",
            margin: "20px auto",
            overflow: "hidden",
            borderRadius: "15px",
          }}
        >

          <img
            src="/profile.jpeg"
            alt="Fathima Khan"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;
