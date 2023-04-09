import { FC } from "react";
import { OrderInfo } from "../../Components/OrderInfo/OrderInfo";
import styles from "./styles.module.css";

export const OrderPage: FC = () => {
  return (
    <section className={styles.section}>
      <OrderInfo />
    </section>
  );
};
