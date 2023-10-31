import styles from "../../styles/map.module.css";
import { useEffect, useState } from "react";

function StarrySky() {
  const [stars, setStars] = useState<
    { cx: string; cy: string; r: number; delay: number }[]
  >([]);

  useEffect(() => {
    const starCount = 150;
    const newStars = [];

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        cx: `${Math.random() * 100}%`,
        cy: `${Math.random() * 100}%`,
        r: Math.random() * 2 + 1,
        delay: Math.floor(Math.random() * 5)
      });
    }

    setStars(newStars);
  }, []);

  return (
    <svg className={styles.starryBackground} xmlns="http://www.w3.org/2000/svg">
      {stars.map((star, index) => (
        <circle
          key={index}
          className={`${styles.star} delay-${star.delay}`}
          cx={star.cx}
          cy={star.cy}
          r={star.r}
        />
      ))}
    </svg>
  );
}

export default StarrySky;
