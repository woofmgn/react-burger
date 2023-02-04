import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./styles.module.css";

export const Modal = ({ children }) => {
  return (
    <div className={styles.container}>
      <div style={{ position: "absolute", top: "50px", right: "40px" }}>
        <CloseIcon type="primary" />
      </div>
      {/* <h2 className="text text_type_main-large">Детали ингредиента</h2> */}
      {children}
    </div>
  );
};
