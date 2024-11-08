import styles from "./VoteCard.module.css";
import { ImageFrame } from "../ImageFrame/ImageFrame";

const catImage = {
  url: "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg",
  id: "MTgwODA3MA",
};

export const VoteCard = () => {
  return (
    <div className={styles.voteCard}>
      <ImageFrame imageData={{ src: catImage.url, id: catImage.id }} />
    </div>
  );
};
