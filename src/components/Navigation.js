import React from 'react';
import { Link } from 'react-router-dom';
 
import * as ROUTES from '../constants/routes';
 
const Navigation = () => (
  <div>
    
        <Link to={ROUTES.CHAT}>
            <button className="button1">
                Need Help?
            </button>
        </Link>
      

        <Link to={ROUTES.LANDING}>
            <button className="button">
                Need to just relax?
            </button>
        </Link>
     
  </div>
);
 
export default Navigation;