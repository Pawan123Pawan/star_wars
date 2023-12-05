
import { useState } from 'react';
import SidebarComponent from './sidebar_component/SidebarComponent'
import styles from './style.module.css';
import ChildSidebar from './child_sidebar/ChildSidebar';

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
        <div className={active.Films && styles.sidebar_child_div}>
        {
          active.Films && filmName.map((films,index)=><ChildSidebar key={index} Name={films.title}/>)
        }
        </div>
      <SidebarComponent
        text={"People"}
        isActive={activeComponent === "People"}
        handleClick={handleSidebarClick}
      />
      <div className={ active.People && styles.sidebar_child_div}>
      {
          active.People && people.map((people,index)=><ChildSidebar key={index} Name={people.name}/>)
        }
      </div>
      <SidebarComponent
        text={"Planets"}
        isActive={activeComponent === "Planets"}
        handleClick={handleSidebarClick}
      />
      <div className={active.Planets && styles.sidebar_child_div}>
      {
          active.Planets && planets.map((planets,index)=><ChildSidebar key={index} Name={planets.name}/>)
        }
      </div>
      <SidebarComponent
        text={"Species"}
        isActive={activeComponent === "Species"}
        handleClick={handleSidebarClick}
      />
      <div className={ active.Species && styles.sidebar_child_div}>
      {
          active.Species && species.map((species,index)=><ChildSidebar key={index} Name={species.name}/>)
        }
      </div>
      <SidebarComponent
        text={"Starships"}
        isActive={activeComponent === "Starships"}
        handleClick={handleSidebarClick}
      />
      <div className={ active.Starships && styles.sidebar_child_div}>
      {
          active.Starships && starships.map((starships,index)=><ChildSidebar key={index} Name={starships.name}/>)
        }
      </div>
      <SidebarComponent
        text={"Vehicles"}
        isActive={activeComponent === "Vehicles"}
        handleClick={handleSidebarClick}
      />
      <div className={ active.Vehicles && styles.sidebar_child_div}>
      {
          active.Vehicles && vehicles.map((vehicles,index)=><ChildSidebar key={index} Name={vehicles.name}/>)
        }
      </div>
    </div>
  )
}

export default SideBar