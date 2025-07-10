import React from "react";
import styles from "./NotFound.module.css";
const Notfound = () => {
  return (
    <div className={styles.notfound}>
      <h1>Sorry Item Not Found!!</h1>
      <h3>please Enter Proper Id!!!</h3>
    </div>
  );
};

export default Notfound;
