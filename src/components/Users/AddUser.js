import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = function (props) {
  // Use refs to get input value
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  /*
  // Use state to get input value upon every keystrock
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const userNameChangeHandler = function (e) {
    setEnteredUserName(e.target.value);
  };
  const ageChangeHandler = function (e) {
    setEnteredAge(e.target.value);
  };
  */
  const addUserHandler = function (e) {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const userInfo = {
      name: enteredUserName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onAddUser(userInfo);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
            // onChange={userNameChangeHandler}
            // value={enteredUserName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
            // value={enteredAge}
            // onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
