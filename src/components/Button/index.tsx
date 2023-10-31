import React from "react";
import { motion } from "framer-motion";
import styles from "./btn.module.css";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <div className={styles.mainButtonContainer}>
      <motion.button
        onClick={onClick}
        initial={{ x: 0, y: 0, z: 0, zIndex: 2 }}
        whileHover={{ x: 5, y: 5, z: -0.01, zIndex: 3 }}
        transition={{
          duration: 0.22,
          ease: "easeInOut",
          delay: 0
        }}
        className={styles.mainButton}
      >
        {children}
      </motion.button>
      <div className={styles.buttonShadow}></div>
    </div>
  );
};

export default Button;
