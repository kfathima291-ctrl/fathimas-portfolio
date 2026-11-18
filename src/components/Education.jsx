import { motion } from "framer-motion";

const educationData = [
  {
    level: "Bachelor of Engineering",
    institution:
      "Jawaharlal Nehru National College of Engineering, Shivamogga",
    year: "2024 – 2028",
    result: "8.26 CGPA",
    status: "Pursuing",
  },
  {
    level: "First PUC",
    institution: "DVS Independent PU College, Shivamogga",
    year: "2021 – 2022",
    result: "94%",
    status: "Completed",
  },
  {
    level: "Second PUC",
    institution: "Imperial PU College, Shivamogga",
    year: "2022 – 2023",
    result: "93.4%",
    status: "Completed",
  },
  {
    level: "SSLC",
    institution: "Ikhlas English School, Shivamogga",
    year: "2020 – 2021",
    result: "97.44%",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">MY ACADEMIC JOURNEY</p>

          <h2>
            Educational <span>Background</span>
          </h2>

          <div className="heading-line"></div>

          <p className="education-intro">
            My academic journey reflects my dedication to learning,
            growth and continuous improvement.
          </p>
        </motion.div>

        <motion.div
          className="education-table-wrapper"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <table className="education-table">
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Academic Year</th>
                <th>Result</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {educationData.map((item, index) => (
                <motion.tr
                  key={item.level}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.12,
                  }}
                >
                  <td className="education-level">{item.level}</td>
                  <td>{item.institution}</td>
                  <td>{item.year}</td>
                  <td className="education-result">{item.result}</td>
                  <td>
                    <span
                      className={
                        item.status === "Pursuing"
                          ? "education-status pursuing"
                          : "education-status completed"
                      }
                    >
                      {item.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;