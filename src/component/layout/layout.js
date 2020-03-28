import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = (Component) => (props) => {
    return (
        <div>
            <Header />
            <div className="flex-container pt-5">
                <div className="row mx-0 my-5">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Component />
                    </div>
                </div>
            </div>
            
         </div>
        // <div>
        //     <Header />
        //     <div className='main-wrap d-flex'>
        //         <Sidebar style={{width:'25%'}}/>
        //         <Component style={{width:'65%'}} />
        //     </div>

        // </div>
        
    )
}       
export default (Layout);