import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Login = (props) => {
    const[username, setInputs] = useState({});
    const[message, setMessage] = useState({success: {message: '', type: false}, error: {message: '', type: false} });
    const [isLoggedIn, setLoggedIn] = useState(false);


    const handleUsernameChange = (e) => {
        setUsername({username: e.target.value});
    }
    const handlePasswordChange = (e) => {
        setPassword({password: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            username: username.username,
            password: password.password
        }

        Axios.post('https://learnable.genesystechhub.com/admin/login')
        .then(res => {
            if(res.status === 200) {
                setInputs({});
                setMessage({successs: { type: true} });
                setTimeout(() => {
                    props.history.push('/home');
                }, 2000)
            } else {
                setMessage({error:{ type: false} });
                console.log('yes erro',error)
            }
        }) 
        .catch(error => {
            console.log(error)
        })

        
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <lable>Username</lable>
                    <input type="text" id="username" value={} onClick={handleUsernameChange} />
                </div>
                <div className="form-group">
                    <lable>Password</lable>
                    <input type="text" id="password" value={} onClick={handlePasswordChange} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>

        </>
    )

}
export default Logout;