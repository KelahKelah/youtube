import React, {Component } from 'react';
import './Sidebar.css';
// import Proptypes from 'prop-types';


class Sidebar extends Component {
    
    render() {
            // console.log(this)
         return(
            <aside>
                <div style={styleItem}>
                    {/* {console.log(this.props.data)} */}
                    {this.props.data.map((d,i)=> {
                        return(
                        <div key={d.i}>
                            <div>{d.history}</div>
                            <div>{d.library}</div>
                            <div>{d.subscription}</div>
                            <div>{d.trending}</div>
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

const styleItem = {
    height: '120vh',
    backgroundColor: 'red'

}
export default Sidebar;

