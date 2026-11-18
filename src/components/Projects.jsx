import { motion } from "framer-motion";
import {
  Flame,
  Wind,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "FireTrace",
    subtitle: "Wildfire Detection & Analysis System",
    description:
      "A technology-driven system designed to support wildfire detection and analysis by presenting meaningful information through an interactive interface.",
    icon: <Flame size={30} />,
    tags: ["Python", "Machine Learning", "Data Analysis"],
    github: "#",
    demo: "#",
  },
  {
    number: "02",
    title: "Weather-Based AQI Prediction",
    subtitle: "Air Quality Prediction System",
    description:
      "A machine learning-based system that analyses weather conditions and air quality data to predict AQI and help users understand environmental conditions.",
    icon: <Wind size={30} />,
    tags: ["Python", "Pandas", "MySQL", "Machine Learning"],
    github: "#",
    demo: "#",
  },
  {
    number: "03",
    title: "Chandas Detector",
    subtitle: "Poetic Metre Detection Website",
    description:
      "A web-based project designed to identify Chandas (poetic metres) by analysing the structure and patterns of poetry.",
    icon: <BookOpen size={30} />,
    tags: ["Web Development", "JavaScript", "Poetry Analysis"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="section-heading">
          <p className="section-subtitle">MY WORK</p>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <div className="heading-line"></div>
          <p className="projects-intro">
            A collection of projects that reflect my learning,
            creativity and passion for technology.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <div className="project-top">
                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github}>
                  GitHub
                </a>

                <a href={project.demo}>
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;