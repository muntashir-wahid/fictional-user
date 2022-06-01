import React from "react";
import styles from "./Overlay.module.css";

const Overlay = function (props) {
  const overlayClickHandler = function () {
    props.onClick(true);
  };
  return (
    <div className={styles.overlay} onClick={overlayClickHandler}>
      {props.children}
    </div>
  );
};

export default Overlay;
