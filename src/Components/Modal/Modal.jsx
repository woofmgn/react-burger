import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./styles.module.css";

export const Modal = ({ children, onClose }) => {
  React.useEffect(() => {
    const closeModal = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", closeModal);

    return () => window.removeEventListener("keydown", closeModal);
  }, [onClose]);
  return (
    <div className={styles.container}>
      <button onClick={() => onClose()} className={styles.close}>
        <CloseIcon type="primary" />
      </button>
      {/* <h2 className="text text_type_main-large">Детали ингредиента</h2> */}
      {children}
    </div>
  );
};
