import React from "react";
import styles from "./InvalidPrompt.module.css";
import Button from "../UI/Button";

const InvalidPrompt = function (props) {

  return (
    <div className={styles["invalid-prompt"]}>
      <header className={styles["invalid-prompt__header"]}>
        <h4>Invalid input</h4>
      </header>
      <div className={styles["invalid-prompt__message"]}>
        <p>{props.invalidMeggage}</p>
      </div>
      <div className={styles["invalid-prompt__btn"]}>
        <Button type={"button"}>Okay</Button>
      </div>
    </div>
  );
};

export default InvalidPrompt;
