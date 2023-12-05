import React, { useEffect, useState } from "react";
import thumb from "../../assets/Rectangle.png";
import movieIcon from "../../assets/FilmReel.png";
import menu from "../../assets/menu.png";
import styles from "./style.module.css";
import DropFIle from "../Drom-file-menu-grid/DropFIle";

function MovieCard({ movieEach, openMovieDetails, imageUrl }) {
  const [dropDown, setDropDown] = useState(false);
  function handleDropFile() {
    setDropDown(!dropDown);
  }
  function handleSideMovieDetails() {
    openMovieDetails(true);
  }
  return (
    <div className={styles.card}>
      <img
        src={imageUrl}
        alt="thubnell"
        className={styles.thumb}
        onClick={handleSideMovieDetails}
      />
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
      {dropDown ? <DropFIle /> : <></>}
    </div>
  );
}

function MovieContainer({ filmdetail, openMovieDetails }) {
  const imageUrl = [
    "https://images.unsplash.com/1/bag-and-hands.jpg?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/1/work-stations-plus-espresso.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/1/iphone-4-closeup.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/1/irish-hands.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/1/type-away.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  
  return (
    <div className={styles.container}>
      {filmdetail.map((movie, index) => (
        <MovieCard
          key={index}
          movieEach={movie}
          openMovieDetails={openMovieDetails}
          imageUrl={imageUrl[index]}
        />
      ))}
    </div>
  );
}

export default MovieContainer;
