import React from 'react';
import './Content.css';



const Content = (props) => {
    return (
        <div>
            <div style={{backgroundColor: '#e6e6e6', borderRadius: '4PX', margin: '1%', color: '#fff', textAlign: 'center',height:'210px' }}>
                <p>{props.text}</p>
                <p>{props.time}</p>
                <p>{props.message}</p>
                <i className={props.icon}></i>
            </div>
            <p>{props.title}</p>
            <p>{props.views}</p>

        </div>
        
    )
}
export default Content;