import React, { FC } from "react";
import { classNames } from "../../helpers/classNames";
import styles from "./styles.module.css";

type TCountFeedsProps = {
  title: string;
  count: number;
};

export const CountFeeds: FC<TCountFeedsProps> = React.memo(
  ({ title, count }) => {
    return (
      <>
        <h3 className="text text_type_main-medium mt-15">{title}</h3>
        <span
          className={classNames(styles.count, {}, [
            "text text_type_digits-large",
          ])}
        >
          {count}
        </span>
      </>
    );
  }
);
