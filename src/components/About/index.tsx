import { motion } from "framer-motion";
import styles from "./about.module.css";
import Cards from "../Cards";

export default function About() {
  return (
    <div className={styles.containerAbout}>
      <div id={styles.about} />

      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        EXPERIENCE THE ADRENALINE LIKE NEVER BEFORE!
      </motion.h1>

      <motion.p
        className={styles.subHeading}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        The ultimate destination for heart-pounding adventure and mind-blowing
        entertainment! Get ready to immerse yourself in a <br /> world of
        exhilarating rides, jaw-dropping shows, and unforgettable moments of
        pure joy!
      </motion.p>
      <Cards />
    </div>
  );
}
