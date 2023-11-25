import styles from "./style.module.css";
import viewsIcon from "../../assets/DropMenuIcon/views.png";
import download from "../../assets/DropMenuIcon/Download.png"
import markprivate from "../../assets/DropMenuIcon/mark-private.png"
import move from "../../assets/DropMenuIcon/move.png"
import Rename from "../../assets/DropMenuIcon/Rename.png"
import share from "../../assets/DropMenuIcon/share.png"
import deleteIcon from "../../assets/DropMenuIcon/delete.png"

function DropFIleList() {
  return (
    <div className={styles.drop_file}>
        <div className={styles.dropcard}>
            <img src={viewsIcon} alt="views" />
            <div>Views</div>
        </div>
        <div className={styles.dropcard}>
            <img src={download} alt="download" />
            <div>Download</div>
        </div>
        <div className={styles.dropcard}>
            <img src={Rename} alt="Rename" />
            <div>Rename</div>
        </div>
        <div className={styles.dropcard}>
            <img src={share} alt="share" />
            <div>Share Link</div>
        </div>
        <div className={styles.dropcard}>
            <img src={move} alt="move" />
            <div>Move</div>
        </div>
        <div className={styles.dropcard}>
            <img src={markprivate} alt="markprivate" />
            <div>Mark Private</div>
        </div>
        <div className={styles.dropcard}>
            <img src={deleteIcon} alt="deleteIcon" />
            <div style={{color:'#F15454'}}>Delete</div>
        </div>
    </div>
  )
}

export default DropFIleList