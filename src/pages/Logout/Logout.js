import React,{ Component } from 'react';

class Logout extends Component {
    constructor(props) {
        super()
        this.state = {
            logout: 'Are you sure you want to logout?'
        }
    }
    handleChange() {
        this.setState({logout:'You are logged out'})
    }
    render() {
        return(
            <div>
                <p>{this.state.logout}</p>
                <button type="submit" value={''} onClick={this.handleChange}>Logout</button>
            </div>
        )
    }
}
export default Logout;