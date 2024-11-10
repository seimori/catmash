import Image from "next/image";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/merging_cats.svg"
        alt="catmash logo"
        width="200"
        height="100"
      />
      <h1 className={styles.title}>Catmash</h1>
    </header>
  );
};
