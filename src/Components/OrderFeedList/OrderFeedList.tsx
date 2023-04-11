import { FC, memo } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { CountFeeds } from "../CountFeeds/CountFeeds";
import { DoneFeedStatus } from "../DoneFeedStatus/DoneFeedStatus";
import { WaitingFeedStatus } from "../WaitingFeedStatus/WaitingFeedStatus";
import styles from "./styles.module.css";

export const OrderFeedList: FC = memo(() => {
  const { total, totalToday } = useAppSelector((state) => state.wsReducer);

  return (
    <div className={styles.container}>
      <div className={styles.statusWrapper}>
        <DoneFeedStatus />
        <WaitingFeedStatus />
      </div>
      <CountFeeds title={"Выполнено за всё время:"} count={total} />
      <CountFeeds title={"Выполнено за сегодня:"} count={totalToday} />
    </div>
  );
});
