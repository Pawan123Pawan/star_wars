import React, { useState } from 'react'
import RightNavbar from '../rightNavbar/RightNavbar'
import MovieContainer from '../moviesContainer/MovieContainer'
import ListContainer from '../movie_list_container/ListContainer'
import ListView from '../listView/ListView'
import GridView from '../grid_view/GridView'

function HandleMovieContainer({value,listName,openMovieDetails}) {
  const[behaviour,setBehaviour] = useState("grid")
  return (
    <div>
      <RightNavbar listName={listName} sendButtonBehaviour={(data)=>setBehaviour(data)} behaviour={behaviour}/>
        {
          listName==="Films" ? behaviour === "grid" ? <MovieContainer filmdetail={value} openMovieDetails={openMovieDetails}/> : <ListContainer filmdetail={value}/>:<></>
        }
        {
          listName==="People" ? behaviour === "list"? <ListView data={value} name={listName}/> : <GridView data={value} name={listName}/>:<></>
        }
        {
          listName==="Planets" ? behaviour === "list"? <ListView data={value} name={listName}/> : <GridView data={value} name={listName}/>:<></>
        }
        {
          listName==="Species" ? behaviour === "list"? <ListView data={value} name={listName}/> : <GridView data={value} name={listName}/>:<></>
        }
        {
          listName==="Starships" ? behaviour === "list"? <ListView data={value} name={listName}/> : <GridView data={value} name={listName}/>:<></>
        }
        {
          listName==="Vehicles" ? behaviour === "list"? <ListView data={value} name={listName}/> : <GridView data={value} name={listName}/>:<></>
        }
    </div>
  )
}

export default HandleMovieContainer