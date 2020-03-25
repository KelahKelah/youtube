import React,{Component} from 'react';

class Logout extends Component {
    constructor(props) {
        super()
        this.state = {
            logout: 'are you sure you want to logout?'
        }
    }
    handleChange() {
        this.setState({logout:'you have logout'})
    }
    render() {
        return(
            <div>
                <input type="submit" onClick={this.handleChange} />
            </div>
        )
    }
}
export default Logout;