import React, { Component } from 'react';
import Layout from '../../component/Layout/Layout'
import { withRouter } from 'react-router-dom';

const Trending = (props) => {
    console.log('my trending', props)
        return(
            <div></div>
        )
}
export default Layout(withRouter(Trending));