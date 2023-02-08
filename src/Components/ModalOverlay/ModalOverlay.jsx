import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.css";

export const ModalOverlay = ({ onClose }) => {
  return <div className={styles.overlay} onClick={() => onClose()}></div>;
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};
