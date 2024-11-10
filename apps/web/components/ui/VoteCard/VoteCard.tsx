import styles from "./VoteCard.module.css";
import { ImageFrame } from "../ImageFrame/ImageFrame";
import { Button } from "../Button/Button";
import { Cat } from "../../../types";

export const VoteCard = ({ cat }: { cat: Cat }) => {
  return (
    <div className={styles.voteCard}>
      <ImageFrame imageData={{ src: cat.url }} />
      <Button>J'aime</Button>
    </div>
  );
};
