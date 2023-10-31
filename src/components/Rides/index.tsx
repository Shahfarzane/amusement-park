import styles from "./rides.module.css";
import { motion } from "framer-motion";

export default function Rides() {
  const projectInfoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  };

  const rides = [
    {
      title: "Sky Soarer",
      description:
        "Soar through the clouds and experience the thrill of flight on the Sky Soarer! This roller coaster takes you up, up, and away, offering breathtaking views of the entire park before plunging into a series of exhilarating loops and twists.",
      imageSrc: "/images/ride6.png"
    },

    {
      title: "The Time Twister",
      description:
        "Travel through time on this mind-bending roller coaster, The Time Twister. Each twist and turn takes you to a different era, from the dinosaurs to the distant future, ensuring a ride filled with excitement and wonder.",
      imageSrc: "/images/ride2.png"
    },

    {
      title: "The Enchanted Carousel",
      description:
        "Take a magical ride on our Enchanted Carousel, where every horse has its own unique story. As the carousel spins, the horses come to life, sharing tales of adventure, romance, and bravery.",
      imageSrc: "/images/ride3.png"
    },
    {
      title: "Firefly Forest",
      description:
        "Experience the beauty of nature like never before on the Firefly Forest ride. Glide through a glowing forest filled with twinkling fireflies, gentle breezes, and the soothing sounds of nature.",
      imageSrc: "/images/ride4.png"
    }
  ];

  return (
    <div className={styles.ridesContainer} id="#rides">
      {rides.map((ride, index) => (
        <div className={styles.ride} key={index}>
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "spring", duration: 0.15 }}
            className={styles.rideImage}
            src={ride.imageSrc}
            alt={ride.title}
          />
          <motion.div
            className={styles.rideInfo}
            variants={projectInfoVariants}
            initial="initial"
            whileHover="hover"
          >
            <h4>{ride.title}</h4>
            <p>{ride.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
