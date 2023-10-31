import { motion } from "framer-motion";
import styles from "./styles/rooms.module.css";
import ContactForm from "./Contact";
import Gallery from "./components/Gallery";

const Rooms = () => {
  return (
    <>
      <div className={styles.container}>
        <section className="grid">
          <article className="grid-item">
            <motion.h2
              className="heading text-transition"
              initial={{ opacity: 0, y: 150 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Dinning Experience
            </motion.h2>
            <motion.p
              className="text-transition"
              initial={{ opacity: 0, y: 150 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              ThrillLand Hotel has everything you could possibly desire, from
              world-class dining to adventurous activities for kids. Create
              unimaginable memories that will last a lifetime!
            </motion.p>
          </article>

          <article className="grid-item">
            <motion.h2
              className="heading text-transition"
              initial={{ opacity: 0, y: 150 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Luxurious Hotel Escapes
            </motion.h2>

            <motion.p
              className="text-transition"
              initial={{ opacity: 0, y: 150 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Stay in style at the ThrillLand Hotel, featuring stunningly
              crafted rooms and suites. After a long day of adventure, unwind by
              the pool or indulge in a heavenly spa experience.
            </motion.p>
          </article>
        </section>

        <Gallery />

        <div className="grid">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Rooms;
