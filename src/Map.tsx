import { motion, useMotionValue } from "framer-motion";
import MapContent from "./components/MapContent";
import styles from "./styles/map.module.css";
import { Transition } from "./components/Transition";

const Map = () => {
  const x = useMotionValue(0);

  return (
    <Transition>
      <div className={styles.container}>
        <motion.div
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ left: -1000, right: 0 }}
          style={{
            x,
            userSelect: "none",
            width: "calc(100% + 1000px)",
            height: "100%",
            zIndex: 1002,
            touchAction: "none",
            position: "relative",
          }}
          whileDrag={{ scale: 1.1 }}
        >
          <div className={styles.grassBackground}></div>
          <MapContent />
        </motion.div>
      </div>
    </Transition>
  );
};

export default Map;
