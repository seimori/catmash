import styles from "./RankingLayout.module.css";

export const RankingLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.rankingLayout}>{children}</section>;
};
