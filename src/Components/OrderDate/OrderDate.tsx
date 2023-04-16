import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

type TOrderDateProps = {
  createdDate?: string;
};

export const OrderDate: FC<TOrderDateProps> = ({ createdDate }) => {
  const today = new Date();
  const orderDate = new Date(createdDate!);
  const dayBefore = today.getDate() - orderDate.getDate();

  return (
    <span className="text text_type_main-default text_color_inactive">
      <FormattedDate
        date={
          new Date(
            orderDate.getFullYear(),
            orderDate.getMonth(),
            orderDate.getDate() - dayBefore,
            orderDate.getHours(),
            orderDate.getMinutes() - 1,
            0
          )
        }
      />
    </span>
  );
};
