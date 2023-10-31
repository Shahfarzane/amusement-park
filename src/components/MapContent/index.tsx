import styles from "../../styles/map.module.css";
import StarrySky from "../stars";
import tree1 from "/images/tree-1.png";
import moon from "/images/Moon.svg";
import Location from "../Location/";
import wc from "/images/map/wc.svg";
import ticketShop from "/images/map/ticket.svg";
import castle from "/images/map/castle.svg";
import ice from "/images/map/icecream.svg";
import wheel from "/images/map/wheel.svg";
import beach from "/images/map/beach.svg";

const MapContent = () => {
  const startingX = window.innerWidth / 10;
  const spacing = window.innerWidth / 15;

  return (
    <main className={styles.main}>
      <StarrySky />
      <img src={moon} className={styles.moon} alt="moon" />
      <img
        src={tree1}
        alt="Tree"
        className={styles.tree}
        width={190}
        height={360}
      />
      <Location
        name="Ticket Shop"
        x={`${startingX + spacing}px`}
        y="150px"
        imageSrc={ticketShop}
        info="Get your tickets here!"
      />
      <Location
        name="Roller Coaster"
        x={`${startingX}px`}
        y="400px"
        imageSrc={castle}
        info="This is a roller coaster."
      />

      <Location
        name="WC"
        x={`${startingX + 2 * spacing}px`}
        y="150px"
        imageSrc={wc}
        info="Restrooms available here."
      />
      <Location
        name="Ferris Wheel"
        x={`${startingX + 3 * spacing}px`}
        y="450px"
        imageSrc={wheel}
        info="Enjoy the view from the top!"
      />
      <Location
        name="WC"
        x={`${startingX + 2 * spacing}px`}
        y="550px"
        imageSrc={wc}
        info="Restrooms available here."
      />
      <Location
        name="Beach"
        x={`${startingX + 4 * spacing}px`}
        y="120px"
        imageSrc={beach}
        info="Strike out some fun!"
      />

      <Location
        name="Beach"
        x={`${startingX + 4 * spacing}px`}
        y="520px"
        imageSrc={beach}
        info="Strike out some fun!"
      />

      <Location
        name="Ice cream shop"
        x={`${1000 + 4 * spacing}px`}
        y="420px"
        imageSrc={ice}
        info="Ice Cream shop here !!"
      />
    </main>
  );
};

export default MapContent;
