import React from 'react'
import grid from "../../assets/View_grid.png";
import list from "../../assets/View_list.png";
import styles from "./CustomList.module.css";
function CustomList() {
  return (
    <div className={styles.grid}>
      <div className={styles.listImage}>
        <img src={grid} alt="grid" />
      </div>
      <div className={styles.grid_button}>
        <img src={list} alt="list" />
        <div>List</div>
      </div>
    </div>
  )
}

export default CustomList