import { FC } from "react";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { OrderFeedList } from "../../Components/OrderFeedList/OrderFeedList";
import styles from "./styles.module.css";

export const Feed: FC = () => {
  return (
    <section className={styles.section}>
      <h1 className={"text text_type_main-large"}>Лента заказов</h1>
      <div className={styles.wrapper}>
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
        <OrderFeedList />
      </div>
    </section>
  );
};
