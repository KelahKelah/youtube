import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Trending from './pages/Trending/Trending';
import Subscription from './pages/Subscription/subscription';
import Library from './pages/Library/Library';
import Logout from './pages/Logout/Logout';

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path='/trending' component={Trending} />
                    <Route exact path='/subscription' component={Subscription} />
                    <Route exact path='/library' component={Library} />
                    <Route exact path='logout' component={Logout} />
                </Switch>
            </BrowserRouter>
        </div>
    )

}
export default Router;


