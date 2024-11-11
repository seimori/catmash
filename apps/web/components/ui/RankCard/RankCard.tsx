import { Cat } from "../../../types";
import { ImageFrame } from "../ImageFrame/ImageFrame";
import { RankBadge } from "../RankBadge/RankBadge";
import { Score } from "../Score/Score";
import styles from "./RankCard.module.css";

export const RankCard = ({ cat, rank }: { cat: Cat; rank: number }) => {
  return (
    <div
      className={`${styles.rankCard} ${rank === 1 ? styles.goldRankCard : rank === 2 ? styles.silverRankCard : rank === 3 ? styles.bronzeRankCard : ""}`}
    >
      <RankBadge rank={rank} />
      <ImageFrame imageData={{ src: cat.url }} />
      <Score score={cat.score} />
    </div>
  );
};
