import React, { useState } from 'react';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const RectangleCP = () => {
  const [data, setData] = useState([
    { id: 1, date: "11/11/1111",  niveau:"1", Semestre:"1", status:"en attente" },
    { id: 2, date: "11/11/1111",  niveau:"1", Semestre:"1", status:"en attente" },
    { id: 3, date: "11/11/1111",  niveau:"1", Semestre:"1", status:"en attente" },
    { id: 1, date: "11/11/1111",  niveau:"1", Semestre:"1", status:"en attente" },
    { id: 2, date: "11/11/1111",  niveau:"1", Semestre:"1", status:"en attente" },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((row) => {
    return row.id.toString().includes(searchTerm) || 
           row.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
           row.niveau.toLowerCase().includes(searchTerm.toLowerCase()) ||
           row.Semestre.toLowerCase().includes(searchTerm.toLowerCase()) ||
           row.status.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div style={{
        width: '1090px',
        height: '590px',
        backgroundColor: '#ffffff',
        borderRadius: '30px',
        alignContent : "center",
        marginLeft : '20px',
        marginTop : '145px',
        marginRight : '55px',
        marginBottom : '10px'
      }}> 
    <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '30px',
        alignContent : "center",
        marginRight : '30px',
        marginBottom : '10px',
        position: 'relative',
      }}>
        <h1 style={{textAlign: "Justify", fontSize: "1.5em" , marginLeft:"42.79px", marginTop:"29.13px"}} >Comités pédagogiques</h1>
        <input type="text" placeholder="Search..." style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px double #000000',
            opacity:0.2,
            width: '220.22px',
            height: '22.89px',
            position: 'absolute',top: '10px',right: '400px',
        }}/>
          <button  style={{padding: '10px', position: 'absolute',borderRadius: '5px',border: '1px double #000000',opacity:0.2,width: '220.22px',height: '44.89px',position: 'absolute',top: '10px',right: '130px'}}> 
            annee en cours   
            <FontAwesomeIcon  color='#3D3C42'  icon={faCaretDown} style={{ marginLeft:"60px"}} /> 

          </button>
        <button style={{position: 'absolute',top: '10px',right: '10px', backgroundColor:"#3E619B", width: '89px', height: '29px', color:"white", fontSize:"14px", fontWeight:"Bold" ,borderRadius:"4px", border: "None" }}>Ajouter</button>
        <button style={{position: 'absolute',top: '50px',right: '10px', backgroundColor:"#3E619B",opacity:0.3, width: '89px', height: '29px', color:"white", fontSize:"14px", fontWeight:"Bold" ,borderRadius:"4px", border: "1px double 3E619B "}}>Enregistrer</button>
         <p style={{textAlign: "Justify", fontSize: "1em" , marginLeft:"42.79px", marginTop:"6.8px"}}>deja existantes</p>
    </div>
        <table style={{
            width:'100%',
            width:'100%',
            marginTop: "40px",
            borderCollapse:'collapse',
            textAlign:'center',
            borderRadius:'30px'
        }}>
            <thead className='thead'>
                <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Niveau</th>
                <th>Semestre</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                <tr key={row.id} className="custom-row" style={{width: '60px', height:'67px'}}>
                    <td style={{width: '60px'}}>{row.id}</td>
                    <td style={{width: '60px'}}>{row.date}</td>
                    <td style={{width: '60px'}}>{row.niveau}</td>
                    <td style={{width: '60px'}}>{row.Semestre}</td>
                    <td style={{width: '60px'}}>
                        <button className="status-button">{row.status}</button>
                    </td>

                </tr>
                ))}
            </tbody>
    
        </table>
        <p style={{textAlign: "Justify", fontSize: "0.5em" ,color:"#B5B7C0" ,marginLeft:"42.79px", marginTop:"29.13px"}}>5 sur 12 comites existantes</p>
    </div>
  );
};

export default RectangleCP;