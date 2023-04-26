import { FC, ReactNode, memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { wsActionsOptions } from "../../services/reducers/wsReducer/wsReducer";
import { WS_BASE_URL } from "../../utils/constants";
import { getCookie } from "../../utils/cookies";
import styles from "./styles.module.css";

type TOrderProps = {
  children: ReactNode;
};

export const OrderPage: FC<TOrderProps> = memo(({ children }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname.includes("/feed")) {
      dispatch({
        type: wsActionsOptions.wsInit,
        payload: `${WS_BASE_URL}/all`,
      });
    } else {
      const token = getCookie("token")?.replaceAll(" ", "");
      dispatch({
        type: wsActionsOptions.wsInit,
        payload: `${WS_BASE_URL}?token=${token}`,
      });
    }
  }, [dispatch, location.pathname]);

  return <section className={styles.section}>{children}</section>;
});
