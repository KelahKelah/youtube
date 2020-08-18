import React, { useState, useEffect } from 'react';
import './Header.css'
import {FaYoutube, FaSistrix, FaVideo, FaTh, FaBell, FaCircleNotch, FaAlignJustify} from 'react-icons/fa';
import Searchbar from '../Searchbar/Searchbar';

// functional components with es6 arrow functions for notification
const Header = () => {
    const[notification, setNotification] = useState(0);

    useEffect(()=> {

        setNotification(5);

    }, [])
    return(
        <header className="contain">
            <i style={headerStyle}><FaAlignJustify style={{color: '#737373', margin:'0px 20px', padding: '8px', width: '40px', height: '40px', font: '10.3px'}} /></i>
            <div className="d-flex" style={{width:'129px', height: '24px', margin: '0px 290px 0px 0px'}}>
                <i style={headerStyle}><FaYoutube/></i>
                <h4>Youtube</h4 >
            </div>
            
            <Searchbar />
            <div className="leftNav" style={{width: '300px', height: '50px'}}>
                <i style={{fontSize:'1.5em', margin: '10px', color:'#606060'}}><FaVideo /></i>
                <i style={{fontSize:'1.5em', margin: '20px', color:'#606060'}}><FaTh /></i>
                <i style={{fontSize:'1.5em', margin: '20px', color:'#606060'}}><FaBell /><span style={{position: 'absolute', 
                color: '#fff', backgroundColor:'#ff0000', width: '20px', height: '20px', borderRadius: '50%',lineHeight: '18px',
                fontsize: '10px',textAlign: 'center', cursor: 'pointer', fontWeight:700}}>{notification}</span></i> 
                <img style={{margin: '12px 18px 16px', border: 'solid 1px #f8f8f8', borderRadius: '50%', width: '30px', height: '32px',backgroundColor:'#f8f8f8'}} />
            </div>
        </header>

    )
    
}
const headerStyle = {
    color: '#ff0000',
    fontSize: '1.5em'
}
export default Header;