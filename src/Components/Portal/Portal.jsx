import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "../Modal/Modal";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import styles from "./styles.module.css";

const portal = document.getElementById("portal");

export const Portal = ({ children, isOpen, onClose, title }) => {
  if (isOpen) {
    return ReactDOM.createPortal(
      <div className={styles.block}>
        <ModalOverlay onClose={onClose} />
        <Modal children={children} onClose={onClose} title={title} />
      </div>,
      portal
    );
  }
};

Portal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};
