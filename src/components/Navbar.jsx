import { useState } from "react";
import { Menu, X, Code2, ContactRound } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <a href="#home" className="logo" onClick={closeMenu}>
        Fathima<span>.</span>
      </a>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMenu}
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="nav-socials">
        <a
          href="https://github.com/kfathima291-ctrl"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Code2 size={19} />
        </a>

        <a
          href="https://www.linkedin.com/in/fatima-khan-9b92ab331"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <ContactRound size={19} />
        </a>
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </motion.nav>
  );
};

export default Navbar;