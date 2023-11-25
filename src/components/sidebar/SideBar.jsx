
import { useState } from 'react';
import SidebarComponent from './sidebar_component/SidebarComponent'
import styles from './style.module.css';
import ChildSidebar from './child_sidebar/ChildSidebar';
import MovieContainer from '../moviesContainer/MovieContainer';

function SideBar({valuePassParent}) {

  

  const [filmName, setFilmName] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const fetchData = async (text) => {
    const category = text.toLowerCase();
    try {
      const url = `https://swapi.dev/api/${category}/`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
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
    const data = await fetchData(text);
    if(text ==="Films"){
      setFilmName(data);
    }
    else if(text ==="People"){
      setPeople(data);
    }
    else if(text ==="Planets"){
      setPlanets(data);
    }
    else if(text ==="Species"){
      setSpecies(data);
    }
    else if(text ==="Starships"){
      setStarships(data);
    }
    else if(text ==="Vehicles"){
      setVehicles(data);
    }
    // setFilmName(data)
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
          active.Films && filmName.map((films,index)=><ChildSidebar key={index} Name={films.title}/>)
        }
      <SidebarComponent
        text={"People"}
        isActive={activeComponent === "People"}
        handleClick={handleSidebarClick}
      />
      {
          active.People && people.map((people,index)=><ChildSidebar key={index} Name={people.name}/>)
        }
      <SidebarComponent
        text={"Planets"}
        isActive={activeComponent === "Planets"}
        handleClick={handleSidebarClick}
      />
      {
          active.Planets && planets.map((planets,index)=><ChildSidebar key={index} Name={planets.name}/>)
        }
      <SidebarComponent
        text={"Species"}
        isActive={activeComponent === "Species"}
        handleClick={handleSidebarClick}
      />
      {
          active.Species && species.map((species,index)=><ChildSidebar key={index} Name={species.name}/>)
        }
      <SidebarComponent
        text={"Starships"}
        isActive={activeComponent === "Starships"}
        handleClick={handleSidebarClick}
      />
      {
          active.Starships && starships.map((starships,index)=><ChildSidebar key={index} Name={starships.name}/>)
        }
      <SidebarComponent
        text={"Vehicles"}
        isActive={activeComponent === "Vehicles"}
        handleClick={handleSidebarClick}
      />
      {
          active.Vehicles && vehicles.map((vehicles,index)=><ChildSidebar key={index} Name={vehicles.name}/>)
        }
    </div>
  )
}

export default SideBar