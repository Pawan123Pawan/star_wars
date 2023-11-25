import React from 'react'
import FilmReel from "../../../assets/FilmReel.png";
import styles from '../child_sidebar/style.module.css';
import ArrowButton from "../../arrowButton/ArrowButton";

function ChildSidebar({Name}) {
  return (
    <div className={styles.sidebar_child}>
      <div className={styles.folder_child}>
        <img src={FilmReel} alt="icon" />
        <div className={styles.movie_name}>{Name}</div>
      </div>
      <ArrowButton/>
    </div>
  )
}

export default ChildSidebar