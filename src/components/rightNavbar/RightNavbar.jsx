import React from 'react'
import styles from "./style.module.css"
import CustomGrid from '../gridAndList/CustomGrid'
import CustomList from '../gridAndList/CustomList'
function RightNavbar() {
  return (
    <div className={styles.rightnavbar}>
        <div>Films</div>
        <CustomGrid/>
        <CustomList/>
    </div>
  )
}

export default RightNavbar