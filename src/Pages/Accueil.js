import React from "react";
import Sidebar from "/Users/cheimamezdour/cestin/src/Components/sidebar.js";
import './styles.css';
import Navbar from "/Users/cheimamezdour/cestin/src/Components/navbar.js";
import Rectangle from "../Components/rectangle";
import RectangleCP from "../Components/rectangle_cp";



function Acceuil() {
  
    return(
        <div className="layout" style={{ width:'100vw',height:'100vh', backgroundColor:'#EFEFF0' }} >
            
            <Navbar/>
            <Sidebar/>
            <Rectangle/>
            
       
        </div>
        );
}

export default Acceuil;