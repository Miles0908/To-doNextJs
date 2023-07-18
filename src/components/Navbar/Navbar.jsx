import {  useContext } from "react";
import { MainContext } from "@/state";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { state ,  dispatch } = useContext(MainContext);

  const onHandleLogout = () => {
    dispatch({ type: "SET_LOGOUT" });
  };
  const onHandleLogin = () => {
    dispatch({ type: "SET_LOGIN" });
  };

  return (
    <div className={styles.Navbar}>
      <h1>Your Notes:</h1>

   

      <p onClick={state?.isLogged ? onHandleLogout : onHandleLogin}>
        {state.isLogged ? state.username : "Login"}
      </p>
    </div>
  );
};

export default Navbar;
