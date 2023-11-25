import styles from './style.module.css'
function PeopleCard({item}){
  return(
      <div className={styles.list_items}>
          <div>Name : {item.name}</div>
          <div>Date of birth : {item.birth_year}</div>
          <div>Species : {item.species}</div>
      </div>
  )
}
function PlanetsCard({item}){
  return(
      <div className={styles.list_items}>
          <div>Name : {item.name}</div>
          <div>Climate : {item.climate}</div>
          <div>Gravity : {item.gravity}</div>
      </div>
  )
}
function SpeciesCard({item}){
  return(
      <div className={styles.list_items}>
          <div>Name : {item.name}</div>
          <div>Homeworld : {item.homeworld}</div>
          <div>Lifespan : {item.language}</div>
      </div>
  )
}
function StarshipsCard({item}){
  return(
      <div className={styles.list_items}>
          <div>Name : {item.name}</div>
          <div>Model : {item.model}</div>
          <div>Hyperdrive Rating : {item.hyperdrive_rating}</div>
      </div>
  )
}
function VehiclesCard({item}){
  return(
      <div className={styles.list_items}>
          <div>Name : {item.name}</div>
          <div>Model: {item.model}</div>
          <div>Speed : {item.max_atmosphering_speed}</div>
      </div>
  )
}
function ListView({data,name}) {
  console.log(name)
  return (
    <div className={styles.list_container}>
        {
         name==="People" && data.map((item, index) => (
            <PeopleCard key={index} item={item}/>
          ))
        }
        {
         name==="Planets" && data.map((item, index) => (
            <PlanetsCard key={index} item={item}/>
          ))
        }
        {
         name==="Species" && data.map((item, index) => (
            <SpeciesCard key={index} item={item}/>
          ))
        }
        {
         name==="Starships" && data.map((item, index) => (
            <StarshipsCard key={index} item={item}/>
          ))
        }
        {
         name==="Vehicles" && data.map((item, index) => (
            <VehiclesCard key={index} item={item}/>
          ))
        }
       
    </div>
  )
}

export default ListView