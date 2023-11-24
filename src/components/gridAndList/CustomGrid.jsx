import React from "react";
import grid from "../../assets/View_grid.png";
import list from "../../assets/View_list.png";
import styles from "./CustomGrid.module.css";
function CustomGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.grid_button}>
        <img src={grid} alt="grid" />
        <div>Grid</div>
      </div>
      <div className={styles.listImage}>
        <img src={list} alt="list" />
      </div>
    </div>
  );
}

export default CustomGrid;
