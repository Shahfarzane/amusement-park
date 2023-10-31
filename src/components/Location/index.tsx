import { motion, AnimatePresence } from "framer-motion";
import styles from "./place.module.css";
import React, { useState } from "react";

interface LocationProps {
  name: string;
  x: string;
  y: string;
  imageSrc: string;
  info: string;
}

const Location: React.FC<LocationProps> = ({ name, x, y, imageSrc, info }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.place}
      style={{ left: x, top: y }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={imageSrc}
        alt={name}
        className={styles.placeImage}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      <span className={styles.placeName}>{name}</span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.5 }}
            className={styles.infoBox}
          >
            <div className={styles.svgCloud}>
              <p>{info}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Location;
