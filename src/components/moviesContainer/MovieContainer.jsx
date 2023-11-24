import React from 'react'
import thumb from "../../assets/Rectangle.png"
import movieIcon from "../../assets/FilmReel.png"
import menu from "../../assets/menu.png"
import styles from "./style.module.css"

function MovieCard() {
  return (
    <div className={styles.card}>
        <img src={thumb} alt="thubnell" className={styles.thumb}/>
        <div className={styles.card_description}>
            <div className={styles.description}>
                <img src={movieIcon} alt="movieIcon" />
                <div>MoviesName</div>
            </div>
            <div className={styles.menu}>
              <img src={menu} alt="menu" />
            </div>
        </div>
    </div>
  )
}

function MovieContainer(){
  return (
    <div className={styles.container}>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
    </div>
  )    
}

export default MovieContainer