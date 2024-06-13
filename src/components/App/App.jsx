import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Comments from "../Comments.jsx";
import Feeling from "../Feeling.jsx";
import Review from "../Review.jsx";
import Supported from "../Supported.jsx";
import Understanding from "../Understanding.jsx";
import Thanks from "../Thanks.jsx";

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
          <Feeling />
        </Route>


        <Route exact path="/understand">
          <Understanding />
        </Route>

        {/* <Route exact path="/admin">
          <Admin/>
        </Route> */}

        <Route exact path="/supported">
          <Supported />
        </Route>

        <Route exact path="/comments">
          <Comments />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/thanks">
          <Thanks/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
