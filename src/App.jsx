import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar";
import RightBar from "./components/rightDiv/RightBar";
function App() {
  const [film, setFilm] = useState([]);
  const[sideBarListName,setSideBarListName]=useState("");

  const handleValue= (data,text)=>{
    // const results =await data;
    setFilm(data)
    setSideBarListName(text)
  }
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <SideBar valuePassParent={handleValue} />
        <RightBar value={film} listName={sideBarListName}/>
      </div>
    </>
  );
}

export default App;
