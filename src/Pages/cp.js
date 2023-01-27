import React from "react";
import Sidebar from "/Users/cheimamezdour/cestin/src/Components/sidebar.js";
import './styles.css';
import Navbar from "/Users/cheimamezdour/cestin/src/Components/navbar.js";
import Rectangle from "../Components/rectangle";
import RectangleCP from "../Components/rectangle_cp";



function cp() {
  
    return(
        <div className="layout" style={{ width:'100vw',height:'100vh', backgroundColor:'#EFEFF0' }} >
            
            <Navbar/>
            <Sidebar/>
            <RectangleCP/>
            
       
        </div>
        );
}

export default cp;