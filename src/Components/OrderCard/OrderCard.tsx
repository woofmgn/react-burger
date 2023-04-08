import { FC } from "react";
import styles from "./styles.module.css";

export const OrderCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className="text text_type_digits-default">#03465</p>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 14.24
        </p>
      </div>
      <p className="text text_type_main-medium mt-6">Interstellar Burger.</p>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.item}></li>
        </ul>
      </div>
    </div>
  );
};
