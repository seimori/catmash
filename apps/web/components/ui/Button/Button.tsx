import styles from "./Button.module.css";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className={styles.button}>{children}</button>;
};
