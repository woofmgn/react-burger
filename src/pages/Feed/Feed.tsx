import { FC } from "react";
import { OrderList } from "../../Components/OrderList/OrderList";
import styles from "./styles.module.css";

export const Feed: FC = () => {
  return (
    <section className={styles.section}>
      <h1 className={"text text_type_main-large"}>Лента заказов</h1>
      <div className={styles.wrapper}>
        <OrderList />
      </div>
    </section>
  );
};
