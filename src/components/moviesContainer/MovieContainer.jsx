import React, { useState } from 'react'
import thumb from "../../assets/Rectangle.png"
import movieIcon from "../../assets/FilmReel.png"
import menu from "../../assets/menu.png"
import styles from "./style.module.css"
import DropFIle from '../Drom-file-menu-grid/DropFIle'
import MovieDetaileSidebar from '../movies_details_sidebar/MovieDetaileSidebar'

function MovieCard({movieEach,openMovieDetails}) {
  const[dropDown,setDropDown] = useState(false)
  const[sideMovieDetails,setSideMovieDetails] = useState(false)
  function handleDropFile(){
    setDropDown(!dropDown)
  }
 function handleSideMovieDetails(){
  console.log("dsdjk")
  // setSideMovieDetails(!sideMovieDetails)
  openMovieDetails(true)
 }
  return (
    <div className={styles.card} >
        <img src={thumb} alt="thubnell" className={styles.thumb} onClick={handleSideMovieDetails }/>
        {
          // sideMovieDetails? <MovieDetaileSidebar/>:<></>
        }
        <div className={styles.card_description}>
            <div className={styles.description}>
                <img src={movieIcon} alt="movieIcon" />
                <div>{movieEach.title}</div>
            </div>
            <div className={styles.menu} onClick={handleDropFile}>
              <img src={menu} alt="menu" />
            </div>
        </div>
        {
          dropDown? <DropFIle/>:<></>
        }
    </div>
  )
}

function MovieContainer({filmdetail,openMovieDetails}){
  return (
    <div className={styles.container}>
      {
        filmdetail.map((movie,index)=><MovieCard key={index} movieEach={movie} openMovieDetails={openMovieDetails}/>)
      }
        
    </div>
  )    
}

export default MovieContainer