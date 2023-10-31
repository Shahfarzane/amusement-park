import { motion } from "framer-motion";
import Rides from "./components/Rides";
import styles from "./styles/home.module.css";
import About from "./components/About";
import Ticket from "./components/Ticket";

export const Home = () => {
  const standardTicket = {
    title: "Standard Ticket",
    amenities: [
      "General Admission",
      "Access to all public areas",
      "Free Wi-Fi",
    ],
  };

  const premiumTicket = {
    title: "Premium Ticket",
    amenities: [
      "Everything in the Standard Ticket",
      "Fast Track Entry",
      "Access to Premium Lounge",
      "Complimentary Snacks and Drinks",
      "Exclusive Merchandise Discount",
    ],
  };

  const vipTicket = {
    title: "VIP Ticket",
    amenities: [
      "Everything in the Premium Ticket",
      "Personal Guide",
      "Backstage Access",
      "Reserved Seating",
      "VIP Parking",
      "Gourmet Dining Options",
    ],
  };
  return (
    <>
      <div className={styles.heroBox}>
        <div className={styles.hero}>
          <p className={styles.heroText}>
            Embark on a fantastic journey through our exhilarating amusement
            park! Discover mind-blowing attractions, savour scrumptious treats,
            and embrace the magic that awaits you.
          </p>
        </div>
      </div>

      <About />

      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 150 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ultimate Amusement Destination
          </motion.h2>

          <motion.p
            className={styles.cardSubheading}
            initial={{ opacity: 0, y: 150 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Get ready for an amusement park experience like no other. Our
            Thrilling Adventure Amusement Park is a wonderland filled with
            incredible rides, grand shows, and surprises at every turn. Discover
            the adrenaline-pumping roller coasters, splash-tastic water
            attractions, and mesmerizing live shows that make our park truly
            stand out.
          </motion.p>
        </div>
        <div className={styles.gridItem}>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 150 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Heart-Pounding Adventures Await
          </motion.h2>

          <motion.p
            className={styles.cardSubheading}
            initial={{ opacity: 0, y: 150 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Step into ThrillLand, the ultimate amusement park experience where
            adrenaline junkies unite. Scream with delight as you conquer
            breathtaking rides and immerse yourself in enthralling live shows.
            It’s a wild, unforgettable journey!
          </motion.p>
        </div>
      </div>
      <Rides />
      <div className={styles.wrapper}>
        <motion.h4
          className={styles.heading}
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Skip the Line and Buy your tickets online !
        </motion.h4>
      </div>
      <section className={styles.wrapper}>
        <Ticket ticketTier={standardTicket} />
        <Ticket ticketTier={premiumTicket} />
        <Ticket ticketTier={vipTicket} />
      </section>
    </>
  );
};
