import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./gallery.module.css";

type ImageFrameProps = {
  image: {
    id: number;
    src: string;
    alt: string;
  };
  onExpand: (id: number) => void;
};

function ImageFrame({ image, onExpand }: ImageFrameProps) {
  return (
    <motion.img
      src={image.src}
      alt={image.alt}
      onClick={() => onExpand(image.id)}
      className={styles.smallImageContainer}
      layoutId={`product-${image.id}`}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5 }}
    />
  );
}

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: "/images/room1.png",
      alt: "Image 1"
    },
    {
      id: 2,
      src: "/images/room2.png",
      alt: "Image 2"
    },
    {
      id: 3,
      src: "/images/room3.png",
      alt: "Image 3"
    },
    {
      id: 4,
      src: "/images/room4.png",
      alt: "Image 4"
    },
    {
      id: 5,
      src: "/images/room5.png",
      alt: "Image 5"
    }
  ];

  const [mainImageId, setMainImageId] = useState(1);
  const [galleryImages, setGalleryImages] = useState(
    images.slice(1).filter((img) => img !== undefined) as {
      id: number;
      src: string;
      alt: string;
    }[]
  );

  function setAsPrimary(id: number) {
    const currentImage = images.find((img) => img?.id === mainImageId);
    const newImage = [...galleryImages, currentImage].filter(
      (img) => img !== undefined && img.id !== id
    ) as { id: number; src: string; alt: string }[];

    setMainImageId(id);
    setGalleryImages(newImage);
  }

  const mainImage = images.find((img) => img?.id === mainImageId);

  return (
    <section className={styles.container}>
      <article className={styles.mainImageContainer}>
        {mainImage && (
          <motion.img
            key={mainImageId}
            className={styles.mainImage}
            src={mainImage.src}
            alt={mainImage.alt}
            layoutId={`product-${mainImageId}`}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
          />
        )}
      </article>
      <article className={styles.galleryContainer}>
        {galleryImages.map((image) => (
          <ImageFrame key={image.id} image={image} onExpand={setAsPrimary} />
        ))}
      </article>
    </section>
  );
}
