import { FC } from "react";
import { OrderCard } from "../OrderCard/OrderCard";
import styles from "./styles.module.css";

export const OrderList: FC = () => {
  return (
    <ul className={styles.container}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </ul>
  );
};
