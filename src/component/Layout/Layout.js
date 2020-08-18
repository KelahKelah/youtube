import React, { Fragment } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = (Component) => (props) => {
    return (
        <Fragment>
            <Header />     
            <div className="mainwrap d-flex pt-5 mt-5">
                <div className = "sideBarNav" style={{width: '15%', marginRight: '20px',}}>
                    <Sidebar />
                </div>
                <div className='contentWrap' style={{width: '90%'}}>
                    <Component />
                </div>
            </div>            
        </Fragment>
    )
}       
export default (Layout);