import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<"button">;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
