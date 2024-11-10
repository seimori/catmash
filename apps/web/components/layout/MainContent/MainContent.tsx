import styles from "./MainContent.module.css";

export const MainContent = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.mainContent}>{children}</main>;
};
