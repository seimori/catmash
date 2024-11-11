import styles from "./ImageFrame.module.css";
import Image from "next/image";

export const ImageFrame = ({ imageData }: { imageData: { src: string } }) => {
  return (
    <div className={styles.imageFrame}>
      <Image
        className={styles.image}
        src={imageData.src}
        alt="image of a cat"
        priority={true}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};
