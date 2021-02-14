import {jobList} from '../Assets/joblist';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './JobList.module.scss';
import PublicIcon from '@material-ui/icons/Public';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import {useState} from 'react';

function JobList(props) {
  
  const [page, setPage] = useState(1);
  const [pageStartEnd, setPageStartEnd] = useState({ start: 0, end: 5 });
 
  const handlePageChange =(event,value)=>{
      setPage(value);
      setPageStartEnd({ start: (value - 1) * 5, end: value * 5 - 1});
  }
   
return(
    <>
    {props.jobList.slice(pageStartEnd.start, pageStartEnd.end).map((data,key) => {
         return (
            <Card className={styles.mainCard} key={key}>
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
            </Card>
         )
      })
    } 
    <Pagination count={props.count} variant="outlined" shape="rounded" page={page} onChange={handlePageChange} />
    </>  
)
}
export default JobList