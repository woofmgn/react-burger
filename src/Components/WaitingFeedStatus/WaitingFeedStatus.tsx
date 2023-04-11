import { FC, useMemo } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TWSState } from "../../services/reducers/wsReducer";
import styles from "./styles.module.css";

export const WaitingFeedStatus: FC = () => {
  const { orders }: TWSState = useAppSelector((state) => state.wsReducer);

  const waitingList = useMemo(() => {
    if (orders) {
      return orders
        .filter((order) => order.status !== "done")
        .slice(orders.length - 4);
    }
  }, [orders]);

  // const waitingList  => {
  //   if (orders) {
  //     return orders
  //       .filter((order) => order.status !== "done")
  //       .slice(orders.length - 4);
  //   }
  // }, [orders]);

  return (
    <div className={styles.container}>
      <p className="text text_type_main-medium pb-6">В работе:</p>
      <ul className={styles.list}>
        {waitingList &&
          waitingList.slice(0, 3).map((order) => {
            return (
              <li key={order._id}>
                <p className="text text_type_digits-default">{order.number}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
