import React, { useState } from 'react'
import styles from './style.module.css'
import DashboardRight from '../dashboard/DashboardRight'
import HandleMovieContainer from '../handleMovieContainer/HandleMovieContainer.jsx'
import MovieDetaileSidebar from '../movies_details_sidebar/MovieDetaileSidebar.jsx'
import Modal from "../modal/Modal.jsx"
function RightBar({value,listName}) {
  const[add,setAdd] =useState(false)
  const[modal,setModal] = useState(false)
  function openMovieDetails(data){
    // console.log("coming image: " + data)
    setAdd(data)
  }

  function handleModal(){
    setModal(true);
  }

  function checkModal(checker){
    if(checker){
      setAdd(true);
      setModal(false);
    }  
    else{
      setAdd(false);
      setModal(false);
    }
    console.log("dskjdjs");
  }

  return (
    <div className={styles.rightBar}>
      {
        value.length>0 ? <HandleMovieContainer value={value} listName={listName} openMovieDetails={openMovieDetails}/> :<DashboardRight/>
      }
     
        {
          add? <MovieDetaileSidebar cancelMovieDetails={handleModal}/>:<></>
        }
        {
          modal? <Modal handleModalData={checkModal}/>:<></>
        }
        {/* <Modal handleModalData={checkModal}/> */}
    </div>
  )
}

export default RightBar