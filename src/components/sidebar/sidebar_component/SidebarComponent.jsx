import React, { useState } from "react";
import folderIcon from "../../../assets/FolderSimple.png";
import styles from "../sidebar_component/style.module.css";
import ArrowButton from "../../arrowButton/ArrowButton";
import ArrowUp from "../../arrowButton/ArrowUp";

function SidebarComponent({ text,handleClick,isActive,}) {
  const handleComponentClick = () => {
    handleClick(text);
  };
  return (
      <div className={`${styles.sidebar_div}  ${isActive ? styles.active_state : ""}`} onClick={handleComponentClick}>
        <div className={styles.folder_div}>
          <img src={folderIcon} alt="icon" />
          <div>{text}</div>
        </div>
        {isActive?<ArrowUp/>:<ArrowButton />}
        
      </div>

    
  );
}

export default SidebarComponent;
