import styles from "./style.module.css";
import searchIcon from "../../assets/search.png"
function CustomInput({text,handleChage}) {
  return (
    <div className={styles.div_input}>
        <img src={searchIcon} alt="searchIcon" />
        <input type={text} placeholder="Search Here..." onChange={handleChage}  className={styles.custom_input}/>
    </div>
  )
}

export default CustomInput