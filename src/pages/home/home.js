import React, {Component} from 'react';
import Content from '../../component/Content/Content';
// import Sidebar from '../../component/Sidebar/Sidebar';
import './home.css';
import Layout from '../../component/layout/layout'
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
    this.state = {
        photos: [],
    }

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then( res => {
            this.setState({photos: res.data.slice(0,5)})
        } )
    }
    componentDidUpdate() {
    }
    render() {
        // const {library, history, subscription, trending,} = this.state.sidebarData
        return(
            <div>
                <div className="wrapper"> 
                    <Content photos={this.state.photos} />
                </div>   
            </div>
        )

}
}
export default Layout(Home);
