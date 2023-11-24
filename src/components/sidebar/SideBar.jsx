
import { useState } from 'react';
import SidebarComponent from './sidebar_component/SidebarComponent'
import styles from './style.module.css';
import ChildSidebar from './child_sidebar/ChildSidebar';
import MovieContainer from '../moviesContainer/MovieContainer';

function SideBar({valuePassParent}) {

  

  const [filmName, setFilmName] = useState([]);

  const fetchData = async () => {
    try {
      const url = "https://swapi.dev/api/films/";
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      return(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
   

    
  const [activeComponent, setActiveComponent] = useState(""); // Track the active component
  const[active,setActive] =useState({
    Films: false,
    People: false,
    Planets: false,
    Species: false,
    Starships: false,
    Vehicles: false,
  });
 
  const handleSidebarClick = async(text) => {
    console.log(text);
    setActiveComponent(text);
    setActive((prevActive) => ({
      ...prevActive,
      [text]: !prevActive[text],
    }));
    const data = await fetchData();
    setFilmName(data)
    valuePassParent(data,text);
  };


  return (
    <div className={styles.sideBar}>
      {/* <SidebarComponent text={"Films"} handleClick={handleSidebarClick} activeState={activeColor}/> */}
        <SidebarComponent
        text={"Films"}
        isActive={activeComponent === "Films"}
        handleClick={handleSidebarClick}
        />
        {/* {console.log(active)} */}
        {
          active.Films && filmName.map((films,index)=><ChildSidebar key={index} movieName={films.title}/>)
        }
      <SidebarComponent
        text={"People"}
        isActive={activeComponent === "People"}
        handleClick={handleSidebarClick}
      />
      <SidebarComponent
        text={"Planets"}
        isActive={activeComponent === "Planets"}
        handleClick={handleSidebarClick}
      />
      <SidebarComponent
        text={"Species"}
        isActive={activeComponent === "Species"}
        handleClick={handleSidebarClick}
      />
      <SidebarComponent
        text={"Starships"}
        isActive={activeComponent === "Starships"}
        handleClick={handleSidebarClick}
      />
      <SidebarComponent
        text={"Vehicles"}
        isActive={activeComponent === "Vehicles"}
        handleClick={handleSidebarClick}
      />
    </div>
  )
}

export default SideBar