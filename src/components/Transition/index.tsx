import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type TransitionProps = {
  children: ReactNode;
};
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(5px)"
  },
  in: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)"
  },
  out: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(8px)"
  }
};

const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const Transition = ({ children }: TransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
