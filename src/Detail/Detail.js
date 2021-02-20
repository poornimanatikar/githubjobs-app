import styles from './Detail.module.scss';
import DOMPurify from 'dompurify';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
function Detail(props) {
    const [job,setJob]= useState({});
    const location = useLocation();
    const getDate = (value) => {
     let date_posted = new Date(value);
     let current = new Date();
     let diff = Math.ceil(Math.abs(current - date_posted)/(1000*60*60*24));
     if(diff === 1) {
       return `${diff} day ago`;
     } else {
       return `${diff} days ago`;
     }
    }
    useEffect(()=> {
        
        fetch(`https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions${location.pathname}.json`, {
            "method": "GET"
          })
            .then(response => response.json())
            .then(response => {
               setJob(response);
               console.log(response);
            })
            .catch(err => {
              console.log(err);
            });
    },[location])
return(
   <div className={styles.detail}>
    <div className={styles.applyDetails}>
     <Link to="/">Back to Search</Link>
     <h6>HOW TO APPLY</h6>
     <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(job.how_to_apply)}}></p>
    </div>
    <div className={styles.mainDetails}>
    <h2>{job.title} <Button variant="outlined">{job.type}</Button>  </h2> 
    <span className={styles.access}><AccessTimeIcon/><span>{getDate(job.created_at)}</span></span>
    <div className={styles.logoContainer}>
      <img src={job.company_logo} alt="logo"/>
      <div className={styles.companyDesc}>
        <p className={styles.companyName}>{job.company}</p>
        <p>{job.location}</p>
      </div>
    </div>
    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(job.description)}}></div>
    </div>
   </div>
)
}
export default Detail