import React, {Component} from 'react';
import Content from '../../component/Content/Content';
import Sidebar from '../../component/Sidebar/Sidebar';
import './Home.css'
import Header from '../../component/Header/Header';
import Searchbar from '../../component/Searchbar/Searchbar';

class Home extends Component {
    constructor(props) {
        super(props)
    
    this.state= {
        sidebarData: [
            {
                library:'Favourite videos', 
                history:'Last videos',
                subscription:10, 
                trending:'This Videos'
            },
            {
                library:'Favourite videos',
                history:'Last videos', 
                subscription:10, 
                trending:'This Videos'
            },
        ],
        content: [
            {text: 'Net Ninja',
            title: 'React crash course',
            time: '1200 oclock',
            views: 70,
            message: 'new message',
            },
            {text: 'Traversey',
            title: 'Vanilla javascript',
            time: '300 oclock',
            views: 100,
            message: 'Hello new ',
            },
            {text: 'Tutorials point',
            title: 'How to build with python',
            time: 1200,
            views: 100,
            message: 'Hello world',
            },
            {text: 'Tutorials point',
            title: 'How to build with python',
            time: 1200,
            views: 100,
            message: 'Hello world',
            },
            {text: 'Tutorials point',
            title: 'How to build with python',
            time: 1200,
            views: 100,
            message: 'Hello world',
            },
            {text: 'Tutorials point',
            title: 'How to build with python',
            time: 1200,
            views: 100,
            message: 'Hello world',
            },
        ],

    }

    }
    
     changeTextColor = () => {
         return {
             backgroundColor: 'red', 
             color: '#fff'
         }
    
        }
    render() {
        // const {library, history, subscription, trending,} = this.state.sidebarData

        // const {changeTextColor} = this.changeTextColor


        return(
            <div>
                <Header />
                <Searchbar />

                        <div className="flex-container">
                            <div className="flex-item-first">
                                <Sidebar
                                    data={this.state.sidebarData}
                                />
                            </div>
    
                            <div className="flex-item-second">
                                <div className="flex-container-1">
                                        {this.state.content.map((c,i)=> {
                                            return(
                                                <div className="flex-item-1">
                                                    <div key={i} style={{backgroundColor: '#e6e6e6', borderRadius: '4PX', margin: '4%', color: '#fff', textAlign: 'center',height:'210px' }}>
                                                        <div>{c.text}</div>
                                                        <div>{c.title}</div>
                                                        <div>{c.time}</div>
                                                        <div>{c.views}</div>
                                                        <div>{c.message}</div>
                                                    </div>  
                                                </div>    
                                            )})}
                                </div>
                            </div>
                        </div>             

                </div>
        )

}
}
export default Home;