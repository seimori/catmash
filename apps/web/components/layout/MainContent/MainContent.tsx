import styles from "./MainContent.module.css";

export const MainContent = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.mainContent}>{children}</section>;
};
