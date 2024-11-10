import styles from "./Footer.module.css";

export const Footer = ({ children }: { children: React.ReactNode }) => {
  return <footer className={styles.footer}>{children}</footer>;
};
