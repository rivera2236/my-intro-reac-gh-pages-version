import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/normalize.css'; 
import './css/styles.css'; 
 
const Navigation = () => {
    return (
      <div>
	   	<ul class="nav">
	      <li><NavLink to="/">Home</NavLink></li>
	      <li><NavLink to="./about">Cube</NavLink></li>
	      <li><NavLink to="./contact">Photos</NavLink></li>
	    </ul>
      </div>
    );
}
 
export default Navigation;