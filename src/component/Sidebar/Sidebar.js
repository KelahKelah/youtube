import React, {Component } from 'react';
import './Sidebar.css';


class Sidebar extends Component {
    
    render() {
            // console.log(this)
         return(
            <aside>
                <div className="aside">
                    {/* {console.log(this.props.data)} */}
                    {this.props.data.map((data,i)=> {
                        return(
                        <div key={i}>
                            <div>{data.history}</div>
                            <div>{data.library}</div>
                            <div>{data.subscription}</div>
                            <div>{data.trending}</div>
                        </div>
                        )
                    })

                    }
                </div>
    
            </aside>
        )
    }
}
export default Sidebar;

