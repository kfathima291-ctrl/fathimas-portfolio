import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  Globe,
  Wrench,
  BarChart3,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <Code2 size={25} />,
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    title: "Database",
    icon: <Database size={25} />,
    skills: ["MySQL", "SQL", "DBMS"],
  },
  {
    title: "Data Science & ML",
    icon: <Brain size={25} />,
    skills: ["Machine Learning", "Pandas", "NumPy"],
  },
  {
    title: "Web Development",
    icon: <Globe size={25} />,
    skills: ["HTML", "CSS", "React", "Vite"],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench size={25} />,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Data Analysis",
    icon: <BarChart3 size={25} />,
    skills: ["Data Cleaning", "Data Visualization", "Power BI"],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="section-heading">
          <p className="section-subtitle">MY EXPERTISE</p>
          <h2>Technical <span>Skills</span></h2>
          <div className="heading-line"></div>
          <p className="skills-intro">
            Technologies and tools I'm learning and exploring
            throughout my journey.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-icon">{group.icon}</div>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;