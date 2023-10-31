import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ticket.module.css";

interface TicketProps {
  ticketTier: TicketTier;
}

interface TicketTier {
  title: string;
  amenities: string[];
}

const Ticket: React.FC<TicketProps> = ({ ticketTier }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.ticketContainer}>
      <motion.div
        className={styles.ticket}
        animate={isFlipped ? "back" : "front"}
        variants={variants}
        transition={{ duration: 0.5 }}
        onClick={handleClick}
      >
        <div className={styles.side}>
          <h3 className={styles.title}>{ticketTier.title}</h3>
        </div>

        <div className={styles.backSide}>
          <span className={styles.backContent}>
            <ul>
              {ticketTier.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Ticket;
