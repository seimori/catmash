import styles from "./Footer.module.css";

export const Footer = ({
  children,
  duelCount,
}: {
  children: React.ReactNode;
  duelCount?: number;
}) => {
  if (duelCount === undefined) {
    return <footer className={styles.footer}>{children}</footer>;
  }

  return (
    <footer className={styles.footer}>
      {children}
      <div>
        {duelCount} {duelCount === 1 ? "match joué" : "matchs joués"}
      </div>
    </footer>
  );
};
