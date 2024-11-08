import styles from "./VoteLayout.module.css";

export const VoteLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.voteLayout}>{children}</div>;
};
