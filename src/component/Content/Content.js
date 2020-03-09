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

            <div style={props.changeTextColor}>
                <p>{props.title}</p>
            </div>
            <p>{props.views}</p>
            {props.changeTextColor}
        </div>

    )
}
export default Content; 