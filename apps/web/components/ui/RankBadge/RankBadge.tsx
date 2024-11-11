import styles from "./RankBadge.module.css";

export const RankBadge = ({ rank }: { rank: number }) => {
  return (
    <div className={styles.rankBadge}>
      <span className={styles.rankBadgeText}>{rank}</span>
    </div>
  );
};
