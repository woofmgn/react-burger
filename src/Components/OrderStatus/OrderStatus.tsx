import { FC } from "react";

type TOrderStatusProps = {
  status: string;
};

export const OrderStatus: FC<TOrderStatusProps> = ({ status }) => {
  return <p className={`text text_type_main-default`}>{status}</p>;
};
