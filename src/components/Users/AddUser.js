import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = function (props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const userNameChangeHandler = function (e) {
    setEnteredUserName(e.target.value);
  };
  const ageChangeHandler = function (e) {
    setEnteredAge(e.target.value);
  };
  const addUserHandler = function (e) {
    e.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("Please enter a valid username and age");
      return;
    }
    if (+enteredAge < 1) {
      console.log("Please enter a valid age (>0)");
      return;
    }
    const userInfo = {
      name: enteredUserName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onAddUser(userInfo);
    setEnteredUserName("");
    setEnteredAge("");
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enteredUserName}
          type="text"
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
