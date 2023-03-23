import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styles from "./styles.module.css";

const portal = document.getElementById("portal");

type TModalProps = {
  title?: string;
  onClose: () => void;
  children?: ReactNode;
};

export const Modal: FC<TModalProps> = ({ children, onClose, title }) => {
  React.useEffect(() => {
    const closeModal = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", closeModal);

    return () => window.removeEventListener("keydown", closeModal);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={styles.block}>
      <ModalOverlay onClose={onClose} />
      <div className={styles.container}>
        <h2 className="text text_type_main-large">{title || ""}</h2>
        <button onClick={() => onClose()} className={styles.close}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </div>,
    portal!
  );
};
