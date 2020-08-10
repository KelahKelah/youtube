import React, { Component, Fragment } from 'react';
import Layout from '../../component/Layout/Layout';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import ContentList from '../../component/Content/contentList';

class Trending extends Component {
    constructor() {
            super()
        this.state = {
            photos: [],
            error: false
        }

    }

    componentDidMount() {
        axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then( res => {
            console.log('my photos', res)
            this.setState({photos: res.data.slice(0,9)})
        } )
        .catch( (error) => {
            // console.log(error);
            this.setState({error: true})
         })
    }

    render() {
        return(
            <Fragment>
                <div className="wrapper"> 
                    <ContentList photos={this.state.photos} error={this.state.error} />
                </div>   
            </Fragment>
        )
    }
}
export default Layout(withRouter(Trending));