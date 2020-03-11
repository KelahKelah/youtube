import React from 'react';
import './Sidebar.css';
// import Proptypes from 'prop-types';


const Sidebar = ({data})=> {
         return( 
            <aside>
                <div style={styleContainer}>
                    {/* {console.log(this.props.data)} */}
                    {data.map((d,i)=> {
                        return(
                        <div key={i}>
                            <div style={styleItem1}>
                                <div style={styleItem}>{d.home}</div>
                                <div style={styleItem}>{d.trending}</div>
                                <div style={styleItem}>{d.Subscription}</div>
                            </div>
                            <div style={styleItem1}>
                                <div style={styleItem}>{d.history}</div>
                                <div style={styleItem}>{d.library}</div>
                                <div style={styleItem}>{d.video}</div>
                                <div style={styleItem}>{d.later}</div>
                                <div style={styleItem}>{d.liked}</div>
                            </div>
                            
                        </div>
                        )
                    })

                    }
                </div>
    
            </aside>
        )
}
const styleContainer = {
    height: '120vh',
    backgroundColor: '#fff',
}
const styleItem = {
    // borderBottom: '1px inset #d9d9d9',
    padding: '5%',
}
const styleItem1 = {
    borderBottom: '1px inset #d9d9d9',
}

// Sidebar.proptypes = {
//     data: proptypes.array.isRequired
// }


export default Sidebar;

