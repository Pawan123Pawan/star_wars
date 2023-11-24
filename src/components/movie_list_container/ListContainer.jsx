import styles from "./style.module.css";
import reel from '../../assets/FilmReel.png'
import menu from '../../assets/menu.png'
function ListCard() {
  return (
      <tr className={styles.row_table}>
        <td className={styles.movie_name_td}>
            <img src={reel} alt="reel" />
            <div>Movie Name</div>
        </td>
        <td>Mark</td>
        <td>Otto</td>
        <td align="right"><img src={menu} alt="menu" style={{cursor:"pointer"}} /></td>
      </tr>
  );
}

function ListContainer() {
  return (
    <div className={styles.table_div}>
      <table className={` ${styles.table_body}`}>
        <thead >
          <tr className={styles.table_head}>
            <th>Name</th>
            <th>Director</th>
            <th colSpan={2}>Release Date</th>
          </tr>
        </thead>
        <tbody>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </tbody>
      </table>
    </div>
  );
}

export default ListContainer;
