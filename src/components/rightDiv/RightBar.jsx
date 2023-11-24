import React from 'react'
import styles from './style.module.css'
import DashboardRight from '../dashboard/DashboardRight'
import RightNavbar from '../rightNavbar/RightNavbar'
import MovieCard from '../moviesContainer/MovieContainer.jsx'
import MovieContainer from '../moviesContainer/MovieContainer.jsx'
import DropFIle from '../Drom-file-menu/DropFIle.jsx'
import Modal from '../modal/Modal.jsx'
import ListContainer from '../movie_list_container/ListContainer.jsx'
import GridView from '../grid_view/GridView.jsx'
import ListView from '../listView/ListView.jsx'
import HandleMovieContainer from '../handleMovieContainer/HandleMovieContainer.jsx'
function RightBar({value,listName}) {
  return (
    <div className={styles.rightBar}>
      {
        value.length>0 ? <ListContainer/> :<DashboardRight/>
      }
        {/* <HandleMovieContainer value={value} listName={listName}/> */}
        {/* <RightNavbar/> */}
        
        {/* <DropFIle/>
        <Modal/>
        <ListContainer/>
        <GridView/>
        <ListView/> */}
    </div>
  )
}

export default RightBar