import logoImg  from "../../assets/logo.png"
import CustomInput from "../imput/CustomInput"
import styles from "./style.module.css"

function Navbar() {

  return (
    <div className={styles.navbar}>
        <img src={logoImg} alt=""/>
        <CustomInput/>
    </div>
  )
}

export default Navbar