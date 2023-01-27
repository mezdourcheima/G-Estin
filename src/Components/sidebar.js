import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Pages/styles.css';
import Logo from '/Users/cheimamezdour/cestin/src/assets/images/logo.png';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div>
        <div className="sidebar" style={{borderRight: '1px solid #42506B ' }} >
            <div className="sidebar-header">
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div>
                <button className='buttonAcc' style={{background:'#EF4B4C', marginTop:'40px', width: 199 , height: 54, borderRadius:'14px', color:'white', fontSize: 18,  textAlign: "left" }}>
                <FontAwesomeIcon  color='white'  icon={faHome} style={{ paddingLeft: '10px',paddingRight: '15px' }} />
                accueil
                </button>
            </div>
            <div>
                <p style={{fontSize:12, paddingLeft:'20px'}}>Gestion</p>
            </div>
            <div>
                <button className='buttonAcc' style={{background:'#ffffff', marginTop:'40px', width: 199 , height: 54, borderRadius:'14px',borderColor: '#3E619B', color:'#3E619B', fontSize: 18,  textAlign: "left" }}>
                <FontAwesomeIcon  color='#3E619B'  icon={faHome} style={{ paddingLeft: '10px',paddingRight: '15px' }} />
                EDT
                </button>
                <button className='buttonAcc' style={{background:'#ffffff', marginTop:'40px', width: 199 , height: 54, borderRadius:'14px',borderColor: '#3E619B', color:'#3E619B', fontSize: 18,  textAlign: "left" }}>
                <FontAwesomeIcon  color='#3E619B'  icon={faHome} style={{ paddingLeft: '10px',paddingRight: '15px' }} />
                CP
                </button>
                <button className='buttonAcc' style={{background:'#ffffff', marginTop:'40px', width: 199 , height: 54, borderRadius:'14px',borderColor: '#3E619B', color:'#3E619B', fontSize: 18,  textAlign: "left" }}>
                <FontAwesomeIcon  color='#3E619B'  icon={faHome} style={{ paddingLeft: '10px',paddingRight: '15px' }} />
                Enseignement
                </button>
                <button className='buttonAcc' style={{background:'#ffffff', marginTop:'40px', width: 199 , height: 54, borderRadius:'14px',borderColor: '#3E619B', color:'#3E619B', fontSize: 18,  textAlign: "left" }}>
                <FontAwesomeIcon  color='#3E619B'  icon={faHome} style={{ paddingLeft: '10px',paddingRight: '15px' }} />
                Délibiration
                </button>
            </div>
        </div>
            
    </div>
  );
};

export default Sidebar;
