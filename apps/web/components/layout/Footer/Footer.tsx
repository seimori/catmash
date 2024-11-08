import styles from "./Footer.module.css";

export const Footer = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.footer}>{children}</section>;
};
