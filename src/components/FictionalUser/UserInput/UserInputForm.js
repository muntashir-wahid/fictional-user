import React, { useState } from "react";
import styles from "./UserInputForm.module.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import InvalidPromptModel from "../../InvalidFormSubmission/InvalidPromptModel";

const UserInputForm = function (props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [invalidInput, setInvalidInput] = useState(true);
  const [invalidAge, setInvalidAge] = useState(true);

  const userNameInputHandler = function (e) {
    setUserName(e.target.value);
  };
  const userAgeInputHandler = function (e) {
    setUserAge(e.target.value);
  };
  const userInfoFormSubmitHandler = function (e) {
    e.preventDefault();
    console.log(typeof +userAge);
    if (!userName || !userAge) {
      setInvalidInput(false);
      return;
    }
    if (+userAge < 0) {
      setInvalidAge(false);
      return;
    }
    const userInfo = {
      userName: userName,
      userAge: userAge,
      id: Math.random().toString(),
    };
    props.onSaveUserInput(userInfo);
    setUserAge("");
    setUserName("");
  };
  const overlayCloseHandler = function (isVisible) {
    setInvalidInput(isVisible);
    setInvalidAge(isVisible);
  };
  return (
    <Card>
      <form onSubmit={userInfoFormSubmitHandler}>
        <div className={styles["user-input__form-control"]}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={userName}
              onChange={userNameInputHandler}
            />
          </div>
          <div>
            <label>Age(Years)</label>
            <input
              type="number"
              value={userAge}
              onChange={userAgeInputHandler}
            />
          </div>
        </div>
        <Button type={"submit"}>Add User</Button>
      </form>
      {!invalidInput && (
        <InvalidPromptModel
          onCloseOverlay={overlayCloseHandler}
          invalidMessage="Please enter a valid name and age (non-empty values)."
        />
      )}
      {!invalidAge && (
        <InvalidPromptModel
          onCloseOverlay={overlayCloseHandler}
          invalidMessage="Please enter a valid age (>0)."
        />
      )}
    </Card>
  );
};

export default UserInputForm;
