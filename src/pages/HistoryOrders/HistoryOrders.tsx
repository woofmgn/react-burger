import { FC, useEffect } from "react";
import { NavMenu } from "../../Components/NavMenu/NavMenu";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { OrderStatus } from "../../Components/OrderStatus/OrderStatus";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { wsActionsOptions } from "../../services/reducers/wsReducer";
import { WS_BASE_URL } from "../../utils/constants";
import { getCookie } from "../../utils/cookies";
import styles from "./styles.module.css";

export const HistoryOrders: FC = () => {
  const { orders } = useAppSelector((state) => state.wsReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getCookie("token")?.replaceAll(" ", "");
    dispatch({
      type: wsActionsOptions.wsInit,
      payload: `${WS_BASE_URL}?token=${token}`,
    });

    return () => {
      dispatch({ type: wsActionsOptions.wsClose });
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
                ingredientsList={order.ingredients}
                date={order.createdAt}
                children={<OrderStatus status={order.status} />}
              />
            );
          })}
      </ul>
    </section>
  );
};
