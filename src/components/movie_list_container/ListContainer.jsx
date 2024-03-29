import styles from "./style.module.css";
import reel from '../../assets/FilmReel.png'
import menu from '../../assets/menu.png'
import { useState } from "react";
import DropFIleList from "../drop-file-menu-list/DromFileList";
function ListCard({movieEach}) {
  const[dropDown,setDropDown] = useState(false)
  function handleDropFile(){
    setDropDown(!dropDown)
  }
  return (
      <tr className={styles.row_table}>
        <td className={styles.movie_name_td}>
            <img src={reel} alt="reel" />
            <div>{movieEach.title}</div>
            
        </td>
        <td>{movieEach.director}</td>
        <td>{movieEach.release_date}</td>
        <td align="right"><img src={menu} alt="menu" style={{cursor:"pointer"}} onClick={handleDropFile} /></td>
        {
          dropDown? <DropFIleList/>:<></>
        }
      </tr>
      
  );
}

function ListContainer({filmdetail}) {
  return (
    <div className={styles.table_div}>
      <table className={` ${styles.table_body}`}>
        <thead >
          <tr className={styles.table_head}>
            <th>Name</th>
            <th>Director</th>
            <th colSpan={2}>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {
            filmdetail.map((movie,index)=><ListCard key={index} movieEach={movie}/>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default ListContainer;
