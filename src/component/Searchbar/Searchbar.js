// Best practice import order says node modules should come first 
import React, { useState } from 'react';
import Axios from 'axios';
import { FaSistrix } from 'react-icons/fa';
import './Searchbar.css';

const Searchbar =(props) =>{
    const [searchInput, setSearchInput] = useState({}) ;
    const [isLoading, setIsloading] = useState(false);


    const handleInputChange = (e) => {
        console.log(e)
        setSearchInput()
    }
    const handleInput = (e) => {
        e.preventDefault()

        const url = ''

        Axios.get(url)
        .then(res => {
            console.log()
        })
        .catch((error) => {
            console.log(error)
        })
    }
        return(
            <form>
                <div style={{margin:'0px 200px 0px 0px'}} className="d-flex">
                    <input type="search" value={''} onChange={props} placeholder="Search" style={{width: '562px', border:'solid #e6e6e6 1px', height: '32px', padding: '0 5px'}} type="text" role="Search" />    
                    <div style={{cursor: 'pointer',borderRadius: '0 2px 2px 0', margin: '0', color: '#ccc', border:'solid #e6e6e6 1px', backgroundColor: '#f8f8f8', width: '65px', height: '32px'}}><FaSistrix style={{margin: '0px 10px', opacity: '0.6',}} /></div>
                </div>
           </form>
        )
}
export default Searchbar;