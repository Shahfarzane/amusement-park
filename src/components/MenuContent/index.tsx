import React from "react";
import styles from "./content.module.css";
import Button from "../Button";

interface ContentProps {
  closeModal: () => void;
}

const MenuContent: React.FC<ContentProps> = ({ closeModal }) => {
  return (
    <div className={styles.menuContent}>
      <div className={styles.closeButton}>
        <Button onClick={closeModal} className={styles.closeButton}>
          X
        </Button>
      </div>

      <section className={styles.contentContainer}>
        <article className={styles.textContainer}>
          <h1 className={styles.textBold}>ThrillLand</h1>
          <p>
            Embark on a journey filled with endless fun and thrilling adventures
            at Adventure Wonderland! Explore our vast array of exhilarating
            rides, mesmerizing shows, and delectable food and drink options.
            Plan your visit with ease using our comprehensive park map.
          </p>
        </article>
        <article className={styles.contentContainer}>
          <h2 className={styles.textBold}>Quick Navigation:</h2>
          <div className={styles.navigation}>
            <p>
              <a href="/map">
                <span className={styles.textBold}>Book Your Stay </span>
              </a>
              - Navigate through the park with our interactive map.
            </p>
            <p>
              <a href="/rooms">
                <span className={styles.textBold}>Book Your Stay </span>
              </a>
              - Find the perfect accommodation for your adventure.
            </p>
            <p>
              <a href="/contact">
                <span className={styles.textBold}>Contact Us </span>
              </a>{" "}
              - Get in touch with us for any inquiries or assistance.
            </p>
          </div>
        </article>
      </section>

      <div className={styles.address}>
        <h2 className={styles.textBold}>Visit Us:</h2>
        <p>Just an Imaginary Address here , 12345 Over the rainbow</p>
      </div>
    </div>
  );
};

export default MenuContent;
