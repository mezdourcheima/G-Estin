import React from 'react';
import '../Pages/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
//import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav className="navbar" style={{borderBottom: '1px solid #42506B ' }}>
        <div className="icons-container">
            <a href="#">
                    <FontAwesomeIcon  color='#42506B'  icon={faBell} size="lg"/>
                        
            </a>
            <a href="#"> 
                    <FontAwesomeIcon  color='#42506B'  icon={faUserCircle} size="lg"/>
            </a>
        
        </div>
     
    </nav>
  );
};

export default Navbar;
