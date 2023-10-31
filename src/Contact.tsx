import { motion } from "framer-motion";
import "./styles/contact.css";
import Button from "./components/Button";
import { useState } from "react";
import Ticket from "/images/ticket.svg";
import Food from "/images/food.svg";

const ContactForm = () => {
  const [selectedRoom, setSelectedRoom] = useState<
    "room1" | "room2" | "room3" | null
  >(null);

  return (
    <>
      <div className="contact-container">
        <div id="contact" />

        <motion.h1
          className="heading"
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          If there is anything you would like to ask about the rooms or dinning
          experience, feel free to reach out.
        </motion.h1>

        <div className="data">
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.3, delay: 0.3 },
              x: { duration: 0.8, type: "tween", delay: 0.25 },
            }}
          >
            <form className="form-container">
              <div className="input-container">
                <input className="field" type="text" placeholder="Your name" />
              </div>
              <div className="input-container">
                <input
                  className="field"
                  type="text"
                  placeholder="Your Email Address"
                />
              </div>
              <textarea name="message" className="field" />

              <Button>Send</Button>
            </form>
          </motion.div>

          <motion.section
            className="room-container"
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.3, delay: 0.3 },
              x: { duration: 0.8, type: "spring", delay: 0.25 },
            }}
          >
            <button
              className={` room2 ${selectedRoom === "room2" ? "active" : ""}`}
              onClick={() => setSelectedRoom("room2")}
            >
              {selectedRoom === "room2" && "✓ "}{" "}
              <img src={Ticket} alt="" width="30px" height="30px" />
            </button>

            <button
              className={`room3 ${selectedRoom === "room3" ? "active" : ""}`}
              onClick={() => setSelectedRoom("room3")}
            >
              {selectedRoom === "room3" && "✓ "}{" "}
              <img src={Food} alt="" width="30px" height="30px" />
            </button>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
