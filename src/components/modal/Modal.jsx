import styles from './style.module.css';
import caution from '../../assets/alert-circle.png'

function Modal() {
  return (
    <div className={styles.modal_div}>
        <div className={styles.caution_icon}>
            <img src={caution} alt="caution" />
        </div>
        <div>
            <div className={styles.caution_title}>Caution!</div>
            <p className={styles.caution_des}>Are you sure you want to Delete <span className={styles.caution_name}>$NAME</span></p>
        </div>
        <div className={styles.modal_btn}>
            <button className={`${styles.caution_btn} ${styles.cancel_btn}`}>Cancel</button>
            <button className={`${styles.caution_btn} ${styles.yes_btn}`}>Yes</button>
        </div>
    </div>
  )
}

export default Modal