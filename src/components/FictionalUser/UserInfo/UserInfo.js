import React, { useCallback } from "react";
import styles from "./UserInfo.module.css";

const UserInfo = function (props) {
  return (
    <li className={styles.user}>
      {props.userName} ({props.userAge} years old)
    </li>
  );
};

export default UserInfo;
