import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./burger.module.css";
import Button from "../Button";
import LoadingStep from "../Loading";
import MenuContent from "../MenuContent";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: "100%", transition: { duration: 0.5 } }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <>
        <div onClick={handleToggle}></div>
        {isOpen ? (
          <Button onClick={() => setIsOpen(false)}> X </Button>
        ) : (
          <Button onClick={handleToggle}>Menu</Button>
        )}
      </>

      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <LoadingStep />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className={styles.menu}
            >
              <MenuContent closeModal={closeModal} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
