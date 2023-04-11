import { FC, useMemo } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TWSState } from "../../services/reducers/wsReducer";
import styles from "./styles.module.css";

export const DoneFeedStatus: FC = () => {
  const { orders }: TWSState = useAppSelector((state) => state.wsReducer);

  const doneList = useMemo(() => {
    if (orders) {
      return orders.filter((order) => order.status === "done").slice(0, 4);
    }
  }, [orders]);

  return (
    <div className={styles.container}>
      <p className="text text_type_main-medium pb-6">Готовы:</p>
      <ul className={styles.list}>
        {doneList &&
          doneList.map((item) => {
            return (
              <li key={item._id}>
                <p className="text text_type_digits-default">{item.number}</p>
              </li>
            );
          })}
        {/* <li>
          <p className="text text_type_digits-default">43543</p>
        </li>
        <li>
          <p className="text text_type_digits-default">43543</p>
        </li>
        <li>
          <p className="text text_type_digits-default">43543</p>
        </li> */}
      </ul>
    </div>
  );
};
