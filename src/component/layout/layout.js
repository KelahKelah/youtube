import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = (Component) => (props) => {
    return (
        <div>
            <Header />
            <div className="flex-container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Component />
                    </div>
                </div>
            </div>
            
         </div>
    )
}       
export default (Layout);