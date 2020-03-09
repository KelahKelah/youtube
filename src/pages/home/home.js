import React, {Component} from 'react';
import Content from '../../component/Content/Content';
import Sidebar from '../../component/Sidebar/Sidebar';
import './home.css';
import Header from '../../component/Header/Header';
import Searchbar from '../../component/Searchbar/Searchbar';
import axios from 'axios';

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
        photos: [],

    }

    }
    
     changeTextColor = () => {
         return {
             backgroundColor: 'red', 
             color: '#fff'
         }
    
        }
        
        componentDidMount() {
            // console.log('mounted')
            axios.get('https://jsonplaceholder.typicode.com/photos')
            .then( res => {
                this.setState({photos: res.data.slice(0, 5)})
            } )
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
                            <Content photos={this.state.photos} />
                        </div>             

                </div>
        )

}
}
export default Home;





// {text: 'Net Ninja',
            // title: 'React crash course',
            // time: '1200 oclock',
            // views: 70,
            // message: 'new message',
            // },
            // {text: 'Traversey',
            // title: 'Vanilla javascript',
            // time: '300 oclock',
            // views: 100,
            // message: 'Hello new ',
            // },
            // {text: 'Tutorials point',
            // title: 'How to build with python',
            // time: 1200,
            // views: 100,
            // message: 'Hello world',
            // },
            // {text: 'Tutorials point',
            // title: 'How to build with python',
            // time: 1200,
            // views: 100,
            // message: 'Hello world',
            // },
            // {text: 'Tutorials point',
            // title: 'How to build with python',
            // time: 1200,
            // views: 100,
            // message: 'Hello world',
            // },
            // {text: 'Tutorials point',
            // title: 'How to build with python',
            // time: 1200,
            // views: 100,
            // message: 'Hello world',
            // },