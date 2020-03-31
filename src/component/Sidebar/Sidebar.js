import React from 'react';
import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import {FaHome, FaPooStorm, FaLayerGroup, FaHistory, FaClock, FaThumbsUp, FaRegCaretSquareRight } from 'react-icons/fa'

// import Proptypes from 'prop-types';

const Sidebar = ()=> {
         return( 
                <aside>
                        <ul style={styleContainer} className="text-dark">
                            <p><Link style={styleItem1} to="/"><FaHome style={{margin: '0px 20px', fontSize: '1.4em', color: '#606060'}} /> Home</Link></p>
                            <p><NavLink style={styleItem} to="/trending"> <FaPooStorm style={{margin: '0px 20px', fontSize: '1.4em', color: '#606060'}} /> Trending</NavLink></p>
                            <p><NavLink style={styleItem} to="/subscription"> <FaLayerGroup style={{margin: '0px 20px', fontSize: '1.4em', color: '#606060'}}/> Subscription</NavLink></p>
                        </ul>
                        <ul style={styleContainer} className="text-dark">
                            <p><NavLink style={styleItem} to="/library"><FaRegCaretSquareRight style={{margin: '0px 20px', fontSize: '1.4em', color: '#606060'}} /> Library</NavLink></p>
                            <p><NavLink style={styleItem} to="/trending"><FaHistory style={{margin: '0px 20px', fontSize: '1.4em', color: '#606060'}} /> History</NavLink></p>
                            <p><NavLink style={styleItem} to="/subscription"><FaRegCaretSquareRight style={{margin: '0px 20px', fontSize: '1.4em', color: '#606060'}} /> Your videos</NavLink></p>
                            <p><NavLink style={styleItem} to="/library"><FaClock style={{margin: '0px 20px', fontSize: '1.4em', color: '#606060'}} /> Watch Later</NavLink></p>
                            <p><NavLink style={styleItem} to="/library"> <FaThumbsUp style={{margin: '0px 20px', fontSize: '1.4em', color: '#606060'}} /> Liked Videos </NavLink></p>
                        </ul>                     
                </aside>    
        )
}
const styleContainer = {
    backgroundColor: '#fff',
    padding: '0% 5%',
    borderBottom: '1px inset #ccc',
    color: '',

}
const styleItem = {
    // padding: '25px',
    padding: '0% 5%',
    lineHeight: '3.5',
    color: '#030303',
}
const styleItem1 = {
    padding: '5%',
    lineHeight: '3.5',
    color: '#ff471a',
    margin: '20px 0px 0px 0px'

}
    

// Sidebar.proptypes = {
//     data: proptypes.array.isRequired
// }


export default Sidebar;

