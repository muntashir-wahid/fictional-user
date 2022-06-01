import React, { useState } from "react";
import "./App.css";
import UserInputForm from "./components/FictionalUser/UserInput/UserInputForm";
import UserInfoList from "./components/FictionalUser/UserInfo/UserInfoList";

function App() {
  const [userInfoList, setUserInfoList] = useState([]);
  const savedUserInputHandler = function (userInfo) {
    setUserInfoList((prevUserInfoList) => [userInfo, ...prevUserInfoList]);
  };
  return (
    <main className="app">
      <UserInputForm onSaveUserInput={savedUserInputHandler} />
      <UserInfoList list={userInfoList} />
    </main>
  );
}

export default App;
