import { FC } from "react";
import styles from "./styles.module.css";

export const WaitingFeedStatus: FC = () => {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-medium pb-6">В работе:</p>
      <ul className={styles.list}>
        <li>
          <p className="text text_type_digits-default">43540543</p>
        </li>
        <li>
          <p className="text text_type_digits-default">431543</p>
        </li>
        <li>
          <p className="text text_type_digits-default">43543</p>
        </li>
        <li>
          <p className="text text_type_digits-default">434543</p>
        </li>
      </ul>
    </div>
  );
};
