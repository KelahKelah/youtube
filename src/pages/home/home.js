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
                home:'Home', 
                trending:'Trending',
                Subscription:'Subscriptions',
                library:'Library', 
                history:'History',
                video:'Your Videos',
                later:'Watch Later Videos',
                liked:'Liked Videos',
            },
        ],
        photos: [],
    }

    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then( res => {
            this.setState({photos: res.data.slice(0,5)})
        } )
    }
    render() {
        // const {library, history, subscription, trending,} = this.state.sidebarData
        return(
            <div>
                <Header />
                <Searchbar />

                <div className="flex-container">
                    <div className="flex-item-first">
                        <Sidebar data={this.state.sidebarData} />
                    </div>
                    <div className="flex-item-second">
                        <Content photos={this.state.photos} />
                    </div>
                </div>             

            </div>
        )

}
}
export default Home;
