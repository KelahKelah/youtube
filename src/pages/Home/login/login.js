import React,{Component} from "react";
import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            handleSubmit: '',
            error: '',
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault(); 
        if(!this.state.username) {
            return this.state({error: "Username is required"});
        } 
        if(!this.state.password) {
            return this.state({erroe: "Password is required"});
        } else {
            return true
        }
    }

    handleError() {
        this.setState({error: ''});
    }

    // updateState(e) {
    //     this.setState({username: e.target.value});
    //     this.setState({password: e.target.value});

    // }
    render() {
        return(
            <div className='login_sect'>
                <div className="login_page">
                    <center>
                        <div className="learnable">Learnable <span style={{color: '#ff0'}}>20</span> - Application Dashboard</div>
                    </center>
                    <div className="login_frame">
                        <div className="wrap">
                            <div className="mb-5">
                                <label className="ms-Label">Username</label>
                                <input className="login_input" type="text" name="username"
                                value="{this.state.username}" onChange="{this.handleUsernameChange}"
                                required="" />
                                <h4>{this.state.data}</h4>
                            </div>
    
                            <div className="mt-30">
                                <label className="ms-Label">Password</label>
                                <input className="login_input" type="password" name="password"
                                value="{this.state.password}" onChange="{this.handleUsernameChange}"
                                required="" /> 
                                <h4>{this.state.data}</h4>
                            </div>
    
                            <div className="navigation_buttons mt-5">
                                <button type="button" className="loginButton" onSubmit="{this.handleSubmit}"><span>LOGIN</span><span style={{fontSize:'30px', marginTop: '-15px'}}>&rarr;</span></button>
                            </div>
                        </div>
                        
                    </div>
                </div>
    
            </div>
        )
        
    }
   
}
export default Login;


