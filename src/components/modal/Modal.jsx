import styles from './style.module.css';
import caution from '../../assets/alert-circle.png'

function Modal({handleModalData}) {
  return (
    <div className={styles.modal_div}>
        <div className={styles.caution_icon}>
            <img src={caution} alt="caution" />
        </div>
        <div>
            <div className={styles.caution_title}>Caution!</div>
            {/* <span className={styles.caution_name}>$NAME</span> */}
            <p className={styles.caution_des}>Are you sure you want to Delete </p>
        </div>
        <div className={styles.modal_btn}>
            <button className={`${styles.caution_btn} ${styles.cancel_btn}`} onClick={()=>handleModalData(true)}>Cancel</button>
            <button className={`${styles.caution_btn} ${styles.cancel_btn}`} onClick={()=>handleModalData(false)}>Yes</button>
        </div>
    </div>
  )
}

export default Modal