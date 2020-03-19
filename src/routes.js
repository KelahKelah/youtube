import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Trending from './pages/Trending/trending';
import Subscription from './pages/Subscription/subscription';
import Library from './pages/Library/library';
import Logout from './pages/logout/logout';

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


