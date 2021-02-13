import React from 'react';
import styles from './App.module.scss';
import { withStyles } from "@material-ui/core/styles";
import backgroundImg from './Assets/backgroundImg.png';
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
import JobList from './Jobs/JobList';
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
  const [fullTime, setFullTime] = React.useState(true);
  const handleFullTimeChange =() =>{
    setFullTime(!fullTime);
  }

  const handlePredefined =() => {

  }
  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img src={backgroundImg}></img>
      </div>
      <div className={styles.tbContainer}>
      <CssInput disableUnderline={true}  autoComplete="off" placeholder="Title, companies, expertise or benefits"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <WorkOutlineIcon />
            </InputAdornment>
          } />
       <CssButton>Search</CssButton>   
      </div>
     </div>
     <div className={styles.centerContainer}>
       <div className={styles.selectionContainer}>
       <FormControlLabel
        control={<Checkbox checked={fullTime} color="primary" onChange={()=>handleFullTimeChange()} name="fullTime" />}
        label="Full Time"
      />
      <FormControl>
       <CssInputLabel htmlFor="location">location</CssInputLabel>
       <CssInputSide disableUnderline={true}  autoComplete="off" placeholder="City,state,zip code or country"
          id="location"
          startAdornment={
            <InputAdornment position="start">
              <PublicIcon />
            </InputAdornment>
          } />
       </FormControl>
         <FormControl component="fieldset">
           <RadioGroup  name="predefinedLoc"  onChange={()=>handlePredefined()}>
            <FormControlLabel value="London" control={<Radio color="primary"/>} label="London" />
            <FormControlLabel value="Amsterdam" control={<Radio color="primary"/>} label="Amsterdam" />
            <FormControlLabel value="New York" control={<Radio color="primary"/>} label="New York" />
            <FormControlLabel value="Berlin"  control={<Radio color="primary"/>} label="Berlin" />
           </RadioGroup>
         </FormControl>   
       </div>
       <div className={styles.jobListContainer}>
        <JobList/>
       </div>
      </div>
    </>
  );
}
export default App;
