import { FC, useEffect } from "react";
import { Loader } from "../../Components/Loader/Loader";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { OrderFeedList } from "../../Components/OrderFeedList/OrderFeedList";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  TWSState,
  WSOrders,
  wsActionsOptions,
} from "../../services/reducers/wsReducer/wsReducer";
import { WS_BASE_URL } from "../../utils/constants";
import styles from "./styles.module.css";

export const Feed: FC = () => {
  const { orders, success }: TWSState = useAppSelector(
    (state) => state.wsReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: wsActionsOptions.wsInit, payload: `${WS_BASE_URL}/all` });

    return () => {
      dispatch({ type: wsActionsOptions.wsClose });
    };
  }, [dispatch]);

  return (
    <>
      {!success ? (
        <Loader />
      ) : (
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
                      ingredientsList={order.ingredients}
                      date={order.createdAt}
                    />
                  );
                })}
            </ul>
            <OrderFeedList />
          </div>
        </section>
      )}
    </>
  );
};
