import React, {Component, Fragment} from 'react';
import Content from '../../component/Content/Content';
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
            console.log('my photos', res)
            this.setState({photos: res.data.slice(0,3)})
        } )
        .catch(function (error) {
            console.log(error);
         })
    }
    componentDidUpdate() {
    }
    render() {
        return(
            <Fragment>
                <div className="wrapper"> 
                    <Content photos={this.state.photos} />
                </div>   
            </Fragment>
        )

}
}
export default Layout(Home);
