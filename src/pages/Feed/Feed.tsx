import { FC } from "react";
import { OrderList } from "../../Components/OrderList/OrderList";
import styles from "./styles.module.css";

export const Feed: FC = () => {
  return (
    <section className={styles.section}>
      <OrderList />
    </section>
  );
};
