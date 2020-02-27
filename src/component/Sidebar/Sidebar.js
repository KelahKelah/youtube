import React, {Component } from 'react';
import './Sidebar.css';
// import Proptypes from 'prop-types';


class Sidebar extends Component {
    
    render() {
            // console.log(this)
         return( 
            <aside>
                <div style={styleContainer}>
                    {/* {console.log(this.props.data)} */}
                    {this.props.data.map((d,i)=> {
                        return(
                        <div key={d.i}>
                            <div style={styleItem}>{d.history}</div>
                            <div style={styleItem}>{d.library}</div>
                            <div style={styleItem}>{d.subscription}</div>
                            <div style={styleItem}>{d.trending}</div>
                        </div>
                        )
                    })

                    }
                </div>
    
            </aside>
        )
    }
}
// Sidebar.proptypes = {
//     data: proptypes.array.isRequired
// }
// export default Sidebar;

const styleContainer = {
    height: '120vh',
    backgroundColor: '#fff',
}
const styleItem = {
    borderBottom: '1px inset #d9d9d9',
    padding: '5%',

}
export default Sidebar;

