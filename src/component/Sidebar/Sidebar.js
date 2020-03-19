import React from 'react';
import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import {FaHome, FaPooStorm, FaLayerGroup, FaHistory, FaRegImage, FaClock, FaThumbsUp, FaRegCaretSquareRight } from 'react-icons/fa'

// import Proptypes from 'prop-types';

const Sidebar = ()=> {
         return( 
                <aside>
                    <ul style={styleContainer} className="text-dark">
                        {/* <h3> Lets go for a <FaBeer />? </h3> */}
                        <li><Link style={styleItem1} to="/"><FaHome /> Home</Link></li>
                        <li><NavLink style={styleItem} to="/trending"> <FaPooStorm /> Trending</NavLink></li>
                        <li><NavLink style={styleItem} to="/subscription"> <FaLayerGroup /> Subscription</NavLink></li>
                        <li><NavLink style={styleItem} to="/library"><FaRegCaretSquareRight /> Library</NavLink></li>
                    </ul>
                    <ul style={styleContainer} className="text-dark">
                        <li><NavLink style={styleItem} to="/"><FaRegImage /> Library</NavLink></li>
                        <li><NavLink style={styleItem} to="/trending"><FaHistory /> history</NavLink></li>
                        <li><NavLink style={styleItem} to="/subscription"><FaRegCaretSquareRight /> Your videos</NavLink></li>
                        <li><NavLink style={styleItem} to="/library"><FaClock /> Watch Later</NavLink></li>
                        <li><NavLink style={styleItem} to="/library"> <FaThumbsUp /> Liked Videos </NavLink></li>

                    </ul>
                     
                    {/* {console.log(this.props.data)} */}
                    {/* {data.map((d,i)=> {
                        return(
                        <div key={i}>
                            <div style={styleItem1}>
                                <div style={styleItem}>{d.home}</div>
                                <div style={styleItem}>{d.trending}</div>
                                <div style={styleItem}>{d.Subscription}</div>
                            </div>
                            <div style={styleItem1}>
                                <div style={styleItem}>{d.history}</div>
                                <div style={styleItem}>{d.library}</div>
                                <div style={styleItem}>{d.video}</div>
                                <div style={styleItem}>{d.later}</div>
                                <div style={styleItem}>{d.liked}</div>
                            </div>
                            
                        </div>
                        )
                    })

                    } */}
                </aside>    
        )
}
const styleContainer = {
    backgroundColor: '#fff',
    padding: '5%',
    borderBottom: '1px inset #ccc',

}
const styleItem = {
    // padding: '25px',
    padding: '5%',
    lineHeight: '3.5',
    color: '#404040',


}
const styleItem1 = {
    padding: '5%',
    lineHeight: '3.5',
    color: '#ff471a',}

// Sidebar.proptypes = {
//     data: proptypes.array.isRequired
// }


export default Sidebar;

