import { FC } from "react";
import { NavMenu } from "../../Components/NavMenu/NavMenu";
import styles from "./styles.module.css";

export const HistoryOrders: FC = () => {
  return (
    <section className={styles.section}>
      <NavMenu />
    </section>
  );
};
