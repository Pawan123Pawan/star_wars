import styles from "./style.module.css"
import close from '../../assets/close.png'
import movie from '../../assets/Rectangle.png'

function MovieDetaileSidebar({cancelMovieDetails}) {
  return (
    <div className={styles.movie_details_container}>
        <div className={styles.movie_detail_navbar}>
            <div className={styles.movie_details_title}>Movie Details</div>
            <img src={close} alt="close" style={{cursor:"pointer"}} onClick={cancelMovieDetails} />
        </div>
        <div className={styles.movie_all_detail}>
            <div style={{display:"flex",flexDirection:"column", gap:"8px"}}>
                <div className={styles.movie_title}>Image</div>
                <div><img src={movie} alt="MovieImage" className={styles.movie_image}/></div>
            </div>
            <div style={{display:"flex",flexDirection:"column", gap:"8px"}}>
                <div className={styles.movie_title}>Title</div>
                <div className={styles.movie_des}>Star Wars</div>
            </div>
            <div style={{display:"flex",flexDirection:"column", gap:"8px"}}>
                <div className={styles.movie_title}>Opening Crawl</div>
                <div className={styles.movie_des}>Lorem ipsum dolor sit amet consectetur. Sit.</div>
            </div>
            <div style={{display:"flex",flexDirection:"column", gap:"8px"}}>
                <div className={styles.movie_title}>Genere</div>
                <div className={styles.movie_des}>Super Hero</div>
            </div>
        </div>
        <div className={styles.movie_close_div}>
            <div className={styles.movie_details_close}>Movie Details</div>
        </div>
    </div>
  )
}

export default MovieDetaileSidebar