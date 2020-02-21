import React, {Component} from 'react';
import Content from '../../component/Content/Content';
import Sidebar from '../../component/Sidebar/Sidebar';
import './Home.css'


class Home extends Component {
    
    // USING APPLICATIONDATA OBJECT 
     
    // STATE
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
        ]
    }
    render() {
        var recommendedData = {
            text: 'dummy text',
            title: 'Title of my video',
            time: 1200,
            views: 100,
            message: 'new message',
        }
    // OBJECT DISTRUCTURING 
                                                                                                                                                                                                                                                                                                                                    
        const {text, title, time, views, message} = recommendedData ;
            
        return(
            <div>
                <h4>Youtube</h4> 

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