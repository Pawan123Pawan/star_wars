import styles from './style.module.css'
function ListCard(){
    return(
        <div className={styles.list_items}>
            <div>Name : dssdk</div>
            <div>Name : dssdk</div>
            <div>Name : dssdk</div>
        </div>
    )
}
function ListView() {
  return (
    <div className={styles.list_container}>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        <ListCard/>
    </div>
  )
}

export default ListView