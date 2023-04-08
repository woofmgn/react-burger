import { FC } from "react";
import { OrderCard } from "../OrderCard/OrderCard";
import styles from "./styles.module.css";

export const OrderList: FC = () => {
  return (
    <div className={styles.container}>
      <OrderCard />
    </div>
  );
};
