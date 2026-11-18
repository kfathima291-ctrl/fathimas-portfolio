import { motion } from "framer-motion";
import { Mail, Send, ExternalLink } from "lucide-react";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:kfathima291@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* Section Heading */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">GET IN TOUCH</p>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <div className="heading-line"></div>

          <p className="contact-intro">
            Have an opportunity, a project idea, or just want to connect?
            I'd love to hear from you!
          </p>

        </motion.div>

        {/* Contact Content */}

        <div className="contact-content">

          {/* Left Side */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h3>Let's Talk</h3>

            <p className="contact-info-text">
              I'm always open to discussing new projects,
              creative ideas and opportunities to learn and grow.
              Feel free to reach out!
            </p>

            {/* Email */}

            <a
              href="mailto:kfathima291@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                <Mail size={22} />
              </div>

              <div>
                <h4>Email</h4>
                <p>kfathima291@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/fatima-khan-9b92ab331"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                <ExternalLink size={22} />
              </div>

              <div>
                <h4>LinkedIn</h4>
                <p>Connect professionally</p>
              </div>
            </a>

            {/* GitHub */}

            <a
              href="https://github.com/kfathima291-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                <ExternalLink size={22} />
              </div>

              <div>
                <h4>GitHub</h4>
                <p>Explore my projects</p>
              </div>
            </a>

          </motion.div>

          {/* Right Side - Contact Form */}

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h3>Send Me a Message</h3>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
                <Send size={17} />
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Contact;