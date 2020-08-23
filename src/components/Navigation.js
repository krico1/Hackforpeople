import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'
 
import * as ROUTES from '../constants/routes';
 
const Navigation = () => (
    <div className = "navigate">
    <div className = "max-width-container">

        <div className = "navigation-container">

  
      <Link to={ROUTES.CHAT}>
          <button className="navigation-button">
              Need Help?
          </button>
      </Link>
    

      <Link to={ROUTES.LANDING}>
          <button className="navigation-button">
              Need to just relax?
          </button>
      </Link>
      </div>
      </div>
   
</div>
);
 
export default Navigation;