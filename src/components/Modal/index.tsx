import { motion, AnimatePresence } from "framer-motion";
import styles from "./Modal.module.css";
import Button from "../Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const modalVariants = {
    hidden: {
      y: "100vh",
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.4
      }
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className={styles.modalOverlay}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.ClosebtnContainer}>
              <Button onClick={onClose}>X</Button>
            </div>
            <motion.div variants={contentVariants}>{children}</motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
