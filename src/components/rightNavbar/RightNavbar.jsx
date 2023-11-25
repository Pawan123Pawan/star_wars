import React, { useState } from 'react'
import styles from "./style.module.css"
import CustomGrid from '../gridAndList/CustomGrid'
import CustomList from '../gridAndList/CustomList'
function RightNavbar({listName ,sendButtonBehaviour,behaviour}) {
  // const[manageButtonBehaviour,setActiveButtonBehaviour] =useState(true)
  return (
    <div className={styles.rightnavbar}>
        <div>{listName}</div>
        {
          behaviour === "grid"? <CustomGrid handleGridButton={()=>sendButtonBehaviour("list")}/>:<CustomList handleListButton={()=>sendButtonBehaviour("grid")}/>
        }
        
        
    </div>
  )
}

export default RightNavbar