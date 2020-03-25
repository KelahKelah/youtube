import React from 'react';
import './Header.css'
import {FaYoutube, FaSistrix, FaVideo, FaTh, FaBell, FaCircleNotch, FaAlignJustify} from 'react-icons/fa';


function Header() {
    return(
            <header className="contain">
                <i style={headerStyle}><FaAlignJustify style={{color: '#606060', margin:'0px 0px 0px 0px', padding: '8px', width: '40px', height: '40px', font: '13.3px'}} /></i>
                <div className="d-flex" style={{width:'129px', height: '24px', margin: '0px 290px 0px 0px'}}>
                    <i style={headerStyle}><FaYoutube/></i>
                    <h4>Youtube</h4 >
                </div>
                <div style={{margin:'0px 200px 0px 0px'}} className="d-flex">
                    {/* <input style={{width: '562px', border:'0 2px 2px 0', height: '30px'}} type="text" className="div-control" placeholder="Search" role="search" />    */}
                    <div style={{width: '562px', border:'solid #e6e6e6 1px', height: '32px', padding: '0 5px'}} type="text" role="Search">Search</div>    
                    <div style={{cursor: 'pointer', borderRadius: '0 2px 2px 0', margin: '0', color: '#ccc', border:'solid #e6e6e6 1px', backgroundColor: '#f8f8f8', width: '65px', height: '32px'}}><FaSistrix /></div>
                </div>
                <div style={{width: '224px', height: '40px'}}>
                    <i style={{fontSize:'1.3em', margin: '10px', color:'#606060'}}><FaVideo /></i>
                    <i style={{fontSize:'1.3em', margin: '20px', color:'#606060'}}><FaTh /></i>
                    <i style={{fontSize:'1.3em', margin: '20px', color:'#606060'}}><FaBell /></i>
                    <i style={{fontSize:'1.3em', margin: '20px', color:'#606060'}}><FaCircleNotch /></i>
                </div>

            </header>

    )
    
}
var headerStyle = {
    color: '#ff0000',
    fontSize: '1.5em',
    // margin: '0% 20%',
}
var myStyle = {
    
}

export default Header;