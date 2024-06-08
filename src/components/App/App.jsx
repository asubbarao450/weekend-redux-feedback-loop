import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {



//The first step is to add a router to the 
  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route exact path="/">
      
      </Route>

      <Route exact path="/feeling">
      
      </Route>

      <Route exact path="/understand">
      
      </Route>

      <Route exact path="/supported">
      
      </Route>

      <Route exact path="/comments">
      
      </Route>
      <Route exact path="/feedback">
      
      </Route>
      </Router>
    </div>
  );
}

export default App;
