import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Trending from './pages/Trending/trending';
import Subscription from './pages/Subscription/subscription';
import Library from './pages/Library/library';

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path='/trending' component={Trending} />
                    <Route path='/subscription' component={Subscription} />
                    <Route path='/library' component={Library} />
                    {/* <Route path='logout' component={Logout} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    )

}
export default Router;


