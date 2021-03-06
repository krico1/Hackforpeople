import React from 'react';
import Chat from "./Chat.js"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from "./components/Navigation.js";
import Page from "./Meditation.js";
import './App.css'

// import AdminPage from './Admin';
 
import * as ROUTES from './constants/routes';

function App() {
  return (
    <div>
     <Router>
    <div className = "App">
      <Navigation />
 
      <hr />
 
      <Route exact path={ROUTES.CHAT} component={Chat} />
      <Route exact path={ROUTES.LANDING} component={Page} />

      </div>
  </Router>
    </div>
  );
}

export default App;
