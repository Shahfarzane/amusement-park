import styles from "./loading.module.css";
import { motion } from "framer-motion";

export default function LoadingStep() {
  const height = {
    initial: {
      height: 0
    },
    enter: (i: number) => ({
      height: "100%",
      transition: { duration: 0.5, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] }
    }),
    exit: (i: number) => ({
      height: 0,
      transition: { duration: 0.3, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] }
    })
  };

  const background = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 0.5,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <motion.div className={styles.loadingContainer}>
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
            custom={4 - index}
            className={styles.loading}
          ></motion.div>
        );
      })}
      <motion.div
        variants={background}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.backgroundOverlay}
      ></motion.div>
    </motion.div>
  );
}
