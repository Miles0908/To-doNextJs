import { useContext } from "react";
import { MainContext } from "@/state";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div className={styles.Navbar}>
      <h1>Your Notes:</h1>

      <p>{state.username}</p>
    </div>
  );
};

export default Navbar;
