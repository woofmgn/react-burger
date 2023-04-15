import { FC, useEffect } from "react";
import { NavMenu } from "../../Components/NavMenu/NavMenu";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { OrderStatus } from "../../Components/OrderStatus/OrderStatus";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START_USER_ORDERS,
} from "../../utils/constants";
import styles from "./styles.module.css";

export const HistoryOrders: FC = () => {
  const { orders } = useAppSelector((state) => state.wsReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START_USER_ORDERS });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <NavMenu />
      <ul className={styles.container}>
        {orders &&
          orders.reverse().map((order) => {
            return (
              <OrderCard
                key={order._id}
                number={order.number}
                _id={order._id}
                name={order.name}
                ingredients={order.ingredients}
                date={order.createdAt}
                children={<OrderStatus status={order.status} />}
              />
            );
          })}
      </ul>
    </section>
  );
};
