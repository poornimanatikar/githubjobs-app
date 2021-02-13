import {jobList} from '../Assets/joblist';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './JobList.module.scss';
import PublicIcon from '@material-ui/icons/Public';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


function JobList() {
 
return(
    <>
    {jobList.map((data,key) => {
         return (
            <Card className={styles.mainCard}>
              <CardMedia className={styles.imgContainer} image={data.company_logo}>
              </CardMedia>
              <CardContent className={styles.contentContainer}>
              <Typography variant="subtitle1" color="textSecondary">
               {data.company}
              </Typography>
              <Typography component="h5" variant="h5">
                {data.title}
              </Typography>
              <div className={styles.cardFooter}>
                <Button variant="outlined">{data.type}</Button>                
                <span><PublicIcon /> {data.location} </span>
               </div>
              </CardContent>
              <Divider  />
            </Card>
         )
      })
    } 
    <Pagination count={10} variant="outlined" shape="rounded" page={page} onChange={handleChange} />
    </>  
)
}
export default JobList