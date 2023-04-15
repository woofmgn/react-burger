import { FC, ReactNode, memo } from "react";
import styles from "./styles.module.css";

type TOrderProps = {
  children: ReactNode;
};

export const OrderPage: FC<TOrderProps> = memo(({ children }) => {
  return <section className={styles.section}>{children}</section>;
});
