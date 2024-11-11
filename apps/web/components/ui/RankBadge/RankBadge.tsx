import styles from "./RankBadge.module.css";

export const RankBadge = ({ rank }: { rank: number }) => {
  return <div className={styles.rankBadge}>{rank}</div>;
};
