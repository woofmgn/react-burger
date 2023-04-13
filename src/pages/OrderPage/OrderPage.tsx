import { FC, memo } from "react";
import { OrderInfo } from "../../Components/OrderInfo/OrderInfo";
import styles from "./styles.module.css";

export const OrderPage: FC = memo(() => {
  return (
    <section className={styles.section}>
      <OrderInfo />
    </section>
  );
});
