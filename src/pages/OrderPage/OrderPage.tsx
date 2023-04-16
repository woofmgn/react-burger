import { FC, ReactNode, memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  WS_CONNECTION_START_ALL_ORDERS,
  WS_CONNECTION_START_USER_ORDERS,
} from "../../utils/constants";
import styles from "./styles.module.css";

type TOrderProps = {
  children: ReactNode;
};

export const OrderPage: FC<TOrderProps> = memo(({ children }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname.includes("/feed")) {
      dispatch({ type: WS_CONNECTION_START_ALL_ORDERS });
    } else {
      dispatch({ type: WS_CONNECTION_START_USER_ORDERS });
    }
  }, [dispatch, location.pathname]);

  return <section className={styles.section}>{children}</section>;
});
