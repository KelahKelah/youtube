import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = (props) => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[error, setError] = useState(false)
    const [isLoggedIn, setLoggedIn] = useState(false);


    const handleUsernameChange = (e) => {
        setUsername({username:e.target.value})
    }
    const handlePasswordChange = (e) => {
        setPassword({password:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            username: username.username,
            password: password.password
        }
        axios.post('http://learnable.genesystechhub.com/admin/login', payload)
        .then(res => {
            if(res.status === 200) {
                setUsername({username: ''});
                setPassword({password: ''});
                setTimeout(() => {
                    props.history.push('/');
                }, 2000)
            } else {
                setError(false)
            }
        }
            
            )
        
    }
    // useEffect(()=> {
    //     axios.post('/login', {
    //         firstName: 'Kele',
    //         lastName: 'Password'
    //       })
    //       .then((res) => {
    //         console.log(res);
    //       }, (error) => {
    //         console.log(error);
    //       });
    // })
    return(
        <div>
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

        </div>
    )

}
export default Logout;