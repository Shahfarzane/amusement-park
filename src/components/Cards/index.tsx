import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./cards.module.css";
export default function Cards() {
  const scrollRef = useRef(null);

  return (
    <section className={styles.cardsContainer}>
      <article className={styles.cardLarge}>
        <h3 className={styles.cardHeading}>
          Experience the thrill of a lifetime!
        </h3>
        <p className={styles.cardLargeText}>
          Get ready for a mind-blowing adventure into the realm of excitement
          and entertainment. Our Amusement Park offers a spectacular array of
          one-of-a-kind rides and experiences that will leave you craving for
          more. Don’t miss the phenomenal attractions awaiting you!
        </p>
      </article>

      <section className={styles.smallCardsContainer} ref={scrollRef}>
        <motion.div
          className={styles.cardSmall}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.texContainer}>
            <h2 className={styles.colorGreen}>50</h2>
            <h2 className={styles.signColor}>+</h2>
          </div>
          <h4 className={styles.cardSubheading}>
            adrenaline-pumping rides to conquer
          </h4>
        </motion.div>

        <motion.div
          className={styles.cardSmall}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={styles.texContainer}>
            <h2 className={styles.colorPurple}>10</h2>
          </div>
          <h4 className={styles.cardSubheading}>
            delectable food joints for your taste buds"
          </h4>
        </motion.div>

        <motion.div
          className={styles.cardSmall}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.texContainer}>
            <h2 className={styles.colorPink}>10</h2>
          </div>
          <h4 className={styles.cardSubheading}>Luxurious rooms and suites</h4>
        </motion.div>

        <motion.div
          className={styles.cardSmall}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={styles.texContainer}>
            <h2 className={styles.colorBlue}>100%</h2>
          </div>
          <h4 className={styles.cardSubheading}>
            Delight in culinary experiences
          </h4>
        </motion.div>
      </section>
    </section>
  );
}
