import React from 'react';
import Chat from "./Chat.js"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from "./components/Navigation.js";
import Meditation from "./Meditation.js";

// import AdminPage from './Admin';
 
import * as ROUTES from './constants/routes';

function App() {
  return (
    <div>
     <Router>
    <div>
      <Navigation />
 
      <hr />
 
      <Route exact path={ROUTES.CHAT} component={Chat} />
      <Route exact path={ROUTES.LANDING} component={Meditation} />

      </div>
  </Router>
    </div>
  );
}

export default App;
