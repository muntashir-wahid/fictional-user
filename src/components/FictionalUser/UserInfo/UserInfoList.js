import React from "react";
import styles from "./UserInfoList.module.css";
import UserInfo from "./UserInfo";
import Card from "../../UI/Card";

const UserInfoList = function (props) {
  if (props.list.length ===  0) return;
  return (
    <Card>
      <ul className={styles["user-info__list"]}>
        {props.list.map((user) => (
          <UserInfo
            key={user.id}
            userName={user.userName}
            userAge={user.userAge}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UserInfoList;
