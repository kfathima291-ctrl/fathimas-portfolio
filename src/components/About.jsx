import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Target } from "lucide-react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="section-heading">
          <p className="section-subtitle">GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
          <div className="heading-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm Fathima Khan.</h3>

            <p>
              I am a Computer Science Engineering student with a strong
              interest in technology, programming and Data Science.
              I enjoy exploring new concepts and transforming ideas
              into meaningful projects.
            </p>

            <p>
              My learning journey involves developing programming
              skills, exploring Machine Learning and building
              practical applications.
            </p>

            <p>
              My goal is to grow as a technology professional while
              creating solutions that make a difference.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <BookOpen size={30} />
              <h4>Always Learning</h4>
              <p>Continuously expanding my technical knowledge.</p>
            </div>

            <div className="about-card">
              <Lightbulb size={30} />
              <h4>Problem Solver</h4>
              <p>Finding creative solutions through technology.</p>
            </div>

            <div className="about-card">
              <Target size={30} />
              <h4>Future Focused</h4>
              <p>Working towards becoming a skilled Data Scientist.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;