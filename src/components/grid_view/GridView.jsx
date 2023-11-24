import styles from './style.module.css'
function GridCard(){
    return(
        <div className={styles.grid_items}>
            <div>Name : dssdk</div>
            <div>Name : dssdk</div>
            <div>Name : dssdk</div>
        </div>
    )
}
function GridView() {
  return (
    <div className={styles.grid_container}>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
    </div>
  )
}

export default GridView