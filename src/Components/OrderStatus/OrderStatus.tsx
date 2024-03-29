import { FC } from "react";

type TOrderStatusProps = {
  status: string;
};

export const OrderStatus: FC<TOrderStatusProps> = ({ status }) => {
  const checkStatus = (): string => {
    if (status === "created") {
      return "Создан";
    } else if (status === "pending") {
      return "Готовится";
    } else {
      return "Выполнен";
    }
  };

  return (
    <p
      className={"text text_type_main-default"}
      style={{ color: `${checkStatus() === "Выполнен" ? "#00CCCC" : ""}` }}
    >
      {checkStatus()}
    </p>
  );
};
