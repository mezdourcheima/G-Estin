import React, { useState } from 'react';
import "./styles.css";
import image from '/Users/cheimamezdour/cestin/src/assets/images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";




function SignIn() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('Blue');

  return (
    <div style={{ backgroundColor: '#42506B', minHeight: '100vh'}}>
        <div className='container' >
            <div className='left-column' style={{display: 'flex', justifyContent: 'space between', alignItems: 'center', height: '100vh'}}>
                <div className='body' style={{width: '200px', height: '200px', backgroundColor: 'white', padding: '200px', fontFamily: 'Roboto Mono' }}>
                   <div style={{ position:'absolute',top:150, left:220, width: '500px', height: '200px'}}>
                        <h1> Connexion</h1>
                        <p style={{ fontSize: '12px'}}>Entrer vos identifiant pour acceder a votre compte</p>
                        <button className='input-border' style={{width: '364px', height: '39px', fontFamily:'Roboto' }}>
                            <FontAwesomeIcon className='button' icon={faGoogle} />
                            Connectez-vous avec votre compte Google
                        </button>
                        <p style={{ fontSize: '12px', marginTop:'50px'}}> Adresse Email </p>
                        <input className='input-border' style={{width: '355px', height: '35px', fontFamily: 'Roboto Mono' }} type="text" placeholder="    Adresse Email " size={40} value={text1} onChange={e => setText1(e.target.value)} />
                        <p style={{ fontSize: '12px'}}>Mot de passe</p>
                        <input className='input-border' style={{width: '355px', height: '35px', fontFamily: 'Roboto Mono' }} type="text" placeholder="    Mot de passe" value={text2} onChange={e => setText2(e.target.value)} />
                        <button className='input-border' style={{width: '264px', height: '39px',  marginTop:40, marginLeft:50,  background:'#3E619B', fontFamily: 'Roboto Mono' , color:'white', fontWeight:'500' }}>Connexion</button>
                   </div>
                </div>
            </div>
            <div className='vertical-line'></div>
            <div  className='right-column' style={{display: 'flex', justifyContent: 'space between', alignItems: 'center', height: '100vh'}}>
                <div className='image-container' style={{width: '200px', height: '200px', backgroundColor: 'white', padding: '200px'}}>
                    <img src={image} alt="My image" style={{ width: '500px', height: '300px'}} /> {/* This is to show the logo of the app*/}
                </div>
            </div>
        </div>
  </div>
);
}


export default SignIn;


