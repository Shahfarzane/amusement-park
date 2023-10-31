import Button from "../Button";
import styles from "./header.module.css";
import Logo from "/images/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../Modal";
import Events from "../Events";
import BurgerMenu from "../Burger";
const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const events = [
    { id: 1, name: "Enchanted Carousel Parade", date: "2023-11-01" },
    { id: 2, name: "Firefly Forest Light Show", date: "2023-11-05" },
    { id: 3, name: "Time Twister Chronicles", date: "2023-11-10" },
    { id: 34, name: "Galactic Quest Live", date: "2023-11-10" }
  ];
  const navLinks = [
    { text: "Where to Stay", href: "/rooms" },
    { text: "Contact", href: "/contact" },
    { text: "Map", href: "/map" }
  ];

  const hoverEffect = {
    scale: 1.05,
    color: "#ff9ccc"
  };

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </a>

      <ul className={styles.navbarLinks}>
        {navLinks.map((link, index) => (
          <li key={index} className={styles.navbarItem}>
            <motion.a
              href={link.href}
              whileHover={hoverEffect}
              transition={{ duration: 0.3 }}
            >
              {link.text}
            </motion.a>
          </li>
        ))}
      </ul>

      <div className={styles.btnContainer}>
        <BurgerMenu />
        <Button onClick={openModal}>TICKETS</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Events events={events} />
      </Modal>
    </header>
  );
};

export default Header;
