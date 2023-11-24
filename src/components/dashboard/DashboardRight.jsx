import React from "react";
import dashboard_image from "../../assets/Rectangle.png";
import styles from "./style.module.css";
function DashboardRight() {
  return (
    <div className={styles.container}>
       <div className={styles.dash_container}>
        <img src={dashboard_image} alt="dashboard_image" className={styles.dash_image}/>
        <h1  className={styles.dash_heading}>Welcome to Star Wars Dashboard</h1>
        <p>
          Star Wars is an American epic space opera multimedia franchise created
          by George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop culture phenomenon.
        </p>
      </div>
    </div>
  );
}

export default DashboardRight;
