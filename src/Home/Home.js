import React from 'react';
import styles from './Home.module.scss';
import { withStyles } from "@material-ui/core/styles";
import backgroundImg from '../Assets/backgroundImg.png';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import PublicIcon from '@material-ui/icons/Public';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import JobList from '../Jobs/JobList';
import {useState, useEffect} from 'react';

const CssButton = withStyles({
  root: {
    background: '#1E86FF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    color: 'white',
    width: '20%',
    height: '100%',
    marginTop: '-3%',
    }
})(Button);

const CssInputLabel = withStyles({
  root:{
    textTransform:'uppercase',
    color:'grey',
  }
})(InputLabel)
const CssInput = withStyles({
  root: {
    width: '80%',
    height:'100%'
    }
})(Input);

const CssInputSide = withStyles({
  root: {
    width: '300px',
    marginTop:'2%',
    padding:'2%',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    height:'100%'
    }
})(Input);

function App() {
  const [description, setDescription] = React.useState('');
  const [fullTime, setFullTime] = React.useState(false);
  const [predefined, setPredefined] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [jobList,setJobList] = useState([]);
  const [count, setCount] = useState(0);
  const handleDescriptionChange=(value)=>{
    setDescription(value);
  }
  const handlePredefined =(value) => {
   setPredefined(value)
  }

  const handleFullTimeChange =(value)=>{
    setFullTime(value);
  }

  const handleLocation = (value) => {
    setLocation(value);
  }
  const handleSearch = ()=>{
    const loc = location === ''? predefined : location; 
    const url = loc === ''? `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=${description}&full_time=${fullTime}`:
    `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=${description}&full_time=${fullTime}&location=${loc}`;

    fetch(url, {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => {
        setJobList(response);
        setCount(response.length/5);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetch(`https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json`, {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => {
        setJobList(response);
        setCount(response.length/5);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img src={backgroundImg} alt="not found"></img>
      </div>
      <div className={styles.tbContainer}>
      <CssInput disableUnderline={true}  autoComplete="off" placeholder="Title, companies, expertise or benefits"
          onChange={(e)=>handleDescriptionChange(e.target.value)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <WorkOutlineIcon />
            </InputAdornment>
          } />
       <CssButton onClick={()=>handleSearch()}>Search</CssButton>   
      </div>
     </div>
     <div className={styles.centerContainer}>
       <div className={styles.selectionContainer}>
       <FormControlLabel
        control={<Checkbox checked={fullTime} color="primary" onChange={(e)=>handleFullTimeChange(e.target.checked)} name="fullTime" />}
        label="Full Time"
      />
      <FormControl>
       <CssInputLabel htmlFor="location">location</CssInputLabel>
       <CssInputSide disableUnderline={true}  autoComplete="off" placeholder="City,state,zip code or country"
          id="location" onChange={(e)=> handleLocation(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <PublicIcon />
            </InputAdornment>
          } />
       </FormControl>
         <FormControl component="fieldset">
           <RadioGroup  name="predefinedLoc"  onChange={(e)=>handlePredefined(e.target.value)}>
            <FormControlLabel value="London" control={<Radio color="primary"/>} label="London" />
            <FormControlLabel value="Amsterdam" control={<Radio color="primary"/>} label="Amsterdam" />
            <FormControlLabel value="New York" control={<Radio color="primary"/>} label="New York" />
            <FormControlLabel value="Berlin"  control={<Radio color="primary"/>} label="Berlin" />
           </RadioGroup>
         </FormControl>   
       </div>
       <div className={styles.jobListContainer}>
        <JobList jobList={jobList} count={count}/>
       </div>
      </div>
    </>
  );
}
export default App;
