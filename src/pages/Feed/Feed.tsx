import { FC } from "react";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { OrderFeedList } from "../../Components/OrderFeedList/OrderFeedList";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TWSState, WSOrders } from "../../services/reducers/wsReducer";
import styles from "./styles.module.css";

export const Feed: FC = () => {
  const { orders }: TWSState = useAppSelector((state) => state.wsReducer);

  return (
    <section className={styles.section}>
      <h1 className={"text text_type_main-large"}>Лента заказов</h1>
      <div className={styles.wrapper}>
        <ul className={styles.container}>
          {orders &&
            orders.map((order: WSOrders) => {
              return (
                <OrderCard
                  key={order._id}
                  name={order.name}
                  number={order.number}
                  _id={order._id}
                  ingredients={order.ingredients}
                />
              );
            })}
        </ul>
        <OrderFeedList />
      </div>
    </section>
  );
};
