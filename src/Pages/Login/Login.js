import React from "react";
import style from "./Login.module.css";
import font from "../../images/login-logo.svg";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../Store/Action/User";

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>  dispatch(addUser(result)))
      .catch((err) => console.log(err));
  };
  return (
    <div className={style.container}>
      <img className={style.font} src={font} alt="linkedin-font" />

      <Button className={style.btn} onClick={handleClick}>
        Sign-In
      </Button>
    </div>
  );
};

export default Login;
