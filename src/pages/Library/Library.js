import React, { useState, useEffect } from 'react';
import './library.css'
import Layout from '../../component/Layout/Layout';
import Content from '../../component/Content/Content'
import Axios from 'axios';

const Library = () => {
    const [photo, setPhoto] = useState({});
    const [messsage, setMessage] = useState('')

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            if(res.status === 200) {
                setPhoto({photo: res.data.slice(1,4)})
                // console.log("Log this", res)
            } else {
                console.log()
            }
        })
        .catch(function(error) {
            console.log(error)
        })
        
    },           
    [])
       
        return(
            <div style={myStyle} >
                <Content photos={photo} />
            </div>
        )
}
const myStyle = {
    backgroundColor: '#e6e6e6' 
}
export default Layout(Library);