import { FC } from "react";
import styles from "./styles.module.css";

type TModalOverlayProps = {
  onClose: () => void;
};

export const ModalOverlay: FC<TModalOverlayProps> = ({ onClose }) => {
  return <div className={styles.overlay} onClick={() => onClose()}></div>;
};
