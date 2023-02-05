import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "../Modal/Modal";
import styles from "./styles.module.css";

const portal = document.getElementById("portal");

export const ModalOverlay = ({ children, isOpen, onClose }) => {
  if (isOpen) {
    return ReactDOM.createPortal(
      <div className={styles.overlay} onClick={() => onClose()}>
        <Modal children={children} onClose={onClose} />
      </div>,
      portal
    );
  }
};
