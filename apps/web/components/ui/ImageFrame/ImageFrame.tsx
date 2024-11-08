import styles from "./ImageFrame.module.css";
import Image from "next/image";

export const ImageFrame = ({
  imageData,
}: {
  imageData: { src: string; id: string };
}) => {
  return (
    <div className={styles.imageFrame}>
      <Image
        className={styles.image}
        src={imageData.src}
        alt={imageData.id}
        fill
      />
    </div>
  );
};
