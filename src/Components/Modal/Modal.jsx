import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styles from "./styles.module.css";

const portal = document.getElementById("portal");

export const Modal = ({ children, onClose, title }) => {
  React.useEffect(() => {
    const closeModal = (evt) => {
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
    portal
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};
