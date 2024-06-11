import React from 'react';

import '../Styles/Navbar.css';

import { Link ,NavLink} from 'react-router-dom'
import IIT from '../assets/IIT.png';
import SLogo from '../assets/SLogo.png';
const Navbar=()=>{
  return(
    <div className="navbar">
      <div className="leftSide">
       <Link className="Logos" to="/">    <img  className="img_1" src   ={IIT}/>
          <div className="v"></div>
           
         <img  className="img_2" src={SLogo}/>
       </Link>

      </div>
      <div className="rightSide">
        <div className="login">
         <Link to="/login">Login</Link> 
        </div>

        
        <div className="vertical"></div>
        <ul className="navlinks">
          <li>
           <NavLink to="/home">Home</NavLink>
          </li>
          <li>
           <NavLink to="/events">Events</NavLink>
          </li>
          <li>
           <NavLink to="/learningSanskrit">Learning Sanskrit</NavLink>
          </li>
          <li>
           <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
           <NavLink to="/shaastraSetu">Shaastra Setu</NavLink>
          </li>
          <li>
           <NavLink to="/resources">Resources</NavLink>  
          </li>
   </ul>

         
      </div>      
    </div>
    )
}
export default Navbar;