import styles from './App.module.scss';
import { withStyles } from "@material-ui/core/styles";
import backgroundImg from './Assets/backgroundImg.png';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

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

const CssInput = withStyles({
  root: {
    width: '80%',
    height:'100%'
    }
})(Input);

function App() {
  
  return (
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
  );
}
export default App;
