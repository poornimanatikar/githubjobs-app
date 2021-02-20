import React from 'react';
import styles from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import Details from './Detail/Detail';

function App() {
  
  return (
    <Router>
       <div className={styles.header}>
         <h1>Github Jobs</h1>
       </div>
       <Switch>
          <Route path="/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}
export default App;
