import { FC } from "react";
import { NavMenu } from "../../Components/NavMenu/NavMenu";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { OrderStatus } from "../../Components/OrderStatus/OrderStatus";
import styles from "./styles.module.css";

export const HistoryOrders: FC = () => {
  return (
    <section className={styles.section}>
      <NavMenu />
      <ul className={styles.container}>
        <OrderCard children={<OrderStatus status={"Создан"} />} />
        <OrderCard children={<OrderStatus status={"Создан"} />} />
        <OrderCard children={<OrderStatus status={"Создан"} />} />
        <OrderCard children={<OrderStatus status={"Создан"} />} />
        <OrderCard children={<OrderStatus status={"Создан"} />} />
        <OrderCard children={<OrderStatus status={"Создан"} />} />
        <OrderCard children={<OrderStatus status={"Создан"} />} />
        <OrderCard children={<OrderStatus status={"Создан"} />} />
      </ul>
    </section>
  );
};
