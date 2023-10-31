import { useState } from "react";
import styles from "./events.module.css";
import { motion } from "framer-motion";

type Event = {
  id: number;
  name: string;
  date: string;
};

type Props = {
  events: Event[];
};

const Events = ({ events }: Props) => {
  const [buying, setBuying] = useState<number | null>(null);
  const [bought, setBought] = useState<{ [key: number]: boolean }>({});

  const handleBuyTickets = async (eventId: number) => {
    setBuying(eventId);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setBuying(null);
    setBought((prevBought) => ({ ...prevBought, [eventId]: true }));
  };

  return (
    <ul className={styles.eventsList}>
      {events.map((event: Event) => (
        <li key={event.id} className={styles.eventItem}>
          <div>
            <div className={styles.eventName}>{event.name}</div>
            <div className={styles.eventDate}>{event.date}</div>
          </div>
          <div>
            {buying === event.id ? (
              <div className={styles.loading}></div>
            ) : bought[event.id as number] ? (
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className={styles.boughtButton}
              >
                Purchase Confirmed!
              </motion.button>
            ) : (
              <button
                onClick={() => handleBuyTickets(event.id)}
                className={styles.buyButton}
              >
                Buy Tickets
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Events;
