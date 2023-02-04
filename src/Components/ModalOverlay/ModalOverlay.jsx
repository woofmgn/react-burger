import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "../Modal/Modal";
import { ModalOrder } from "../ModalOrder/ModalOrder";
import styles from "./styles.module.css";

const portal = document.getElementById("portal");

export const ModalOverlay = () => {
  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <Modal children={<ModalOrder />} />
    </div>,
    portal
  );
};
