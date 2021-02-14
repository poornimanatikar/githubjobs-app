import {jobList} from '../Assets/joblist';
import styles from './Detail.module.scss';

function Detail() {
    const job = jobList[0];
return(
   <div className={styles.mainDetail}>
    <div className={styles.applyDetails}>

    </div>
    <div className={styles.mainDetails}>

    </div>
   </div>
)
}
export default Detail