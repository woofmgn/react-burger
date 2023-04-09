import { FC } from "react";
import { CountFeeds } from "../CountFeeds/CountFeeds";
import { DoneFeedStatus } from "../DoneFeedStatus/DoneFeedStatus";
import { WaitingFeedStatus } from "../WaitingFeedStatus/WaitingFeedStatus";
import styles from "./styles.module.css";

export const OrderFeedList: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.statusWrapper}>
        <DoneFeedStatus />
        <WaitingFeedStatus />
      </div>
      <CountFeeds title={"Выполнено за всё время:"} count={3452} />
      <CountFeeds title={"Выполнено за сегодня:"} count={52} />
    </div>
  );
};
