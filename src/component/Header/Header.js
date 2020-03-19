import React from 'react';
import {FaYoutube, FaSistrix, FaVideo, FaTh, FaBell, FaCircleNotch} from 'react-icons/fa'


function Header() {
    return(
        <header>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navar-header">
                        <a className="navbar-brand" href="" style={headerStyle}><FaYoutube /> Youtube</a>
                    </div>
                    <form className="navbar-form navbar-left">
                        <div className="form-group d-flex">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div style={{border: 'solid black 1px', borderRadius: '2px'}}><FaSistrix /></div>
                        </div>
                    </form>
                    <ul style={myStyle} className="nav navbar-right d-flex">
                        <i><FaVideo /></i>
                        <i><FaTh /></i>
                        <i><FaBell /></i>
                        <i><FaCircleNotch /></i>
                    </ul>
                </div>
            </nav>
        </header>
    )
    
}
var headerStyle = {
    color: '#ff471a'
}
var myStyle = {


}

export default Header;