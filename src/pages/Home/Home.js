import React, {Component} from 'react';
import Content from '../../component/Content/Content';
import Sidebar from '../../component/Sidebar/Sidebar';
import './Home.css'
import Header from '../../component/Header/Header';
import Searchbar from '../../component/Searchbar/Searchbar';


class Home extends Component {
    
    state = {
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
            {
                library:'Favourite videos',
                history:'Last videos', 
                subscription:10, 
                trending:'This Videos'
            },

        ],
        recommendedData: {
            text: 'dummy text',
            title: 'Title of my video',
            time: 1200,
            views: 100,
            message: 'new message',
        },
    }
     changeTextColor = () => {
         return {
             backgroundColor: 'red', 
             color: '#fff'
         }
    
        }
    render() {

        // var recommendedData = {
           
        // }
    // OBJECT DISTRUCTURING 
                                                                                                                                                                                                                                                                                                                                    
        const {text, title, time, views, message} = this.state.recommendedData ;

        const {library, history, subscription, trending,} = this.state.sidebarData

        const {changeTextColor} = this.changeTextColor

        const contents = [
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
            {text: 'Code org',
            title: 'Learn vanilla js',
            time: '1000 oclock',
            views: 100,
            message: 'new message',
            },
            {text: 'Alexa video',
            title: 'Learn c#',
            time: 400,
            views: 100,
            message: 'My ads',
            },
            {text: 'Traversey',
            title: 'Vanilla javascript',
            time: '300 oclock',
            views: 100,
            message: 'Hello new ',
            },
        ]

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
                            <div className="flex-item-1">
                                    <Content 
                                        text={text}
                                        title={title}
                                        time={time}
                                        views={views}
                                        message={message}
                                        changeTextColor={changeTextColor}
                                    />
                                </div>

                                <div className="flex-item-1">
                                    <Content 
                                        text={text}
                                        title={title}
                                        time={time}
                                        views={views}
                                        message={message}
                                    />
                                </div>

                                <div className="flex-item-1">
                                    <Content 
                                        text={text}
                                        title={title}
                                        time={time}
                                        views={views}
                                        message={message}
                                    />
                                </div>

                                <div className="flex-item-1">
                                    <Content 
                                        text={text}
                                        title={title}
                                        time={time}
                                        views={views}
                                        message={message}
                                    />
                                </div>

                                <div className="flex-item-1">
                                    <Content 
                                        text={text}
                                        title={title}
                                        time={time}
                                        views={views}
                                        message={message}
                                    />
                                </div>

                                <div className="flex-item-1">
                                    <Content 
                                        text={text}
                                        title={title}
                                        time={time}
                                        views={views}
                                        message={message}
                                    />
                                </div>

                                <div className="flex-item-1">
                                    <Content 
                                        text={text}
                                        title={title}
                                        time={time}
                                        views={views}
                                        message={message}
                                    />
                                </div>

                                <div className="flex-item-1">
                                    <Content 
                                        text={text}
                                        title={title}
                                        time={time}
                                        views={views}
                                        message={message}
                                    />
                                </div>
                                <div className="flex-item-1">
                                    <Content 
                                        text={text}
                                        title={title}
                                        time={time}
                                        views={views}
                                        message={message}
                                    />
                                </div>



                    </div>

                            

                </div>
                    
                    
                </div>





               
            </div>
        )

    }
    
}
export default Home;