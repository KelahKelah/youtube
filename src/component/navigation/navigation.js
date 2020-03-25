import React from 'react';
import {Link, NavLink } from 'react-router-dom';


const Navigation = () => {
    return(
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search Todo" />
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to="/contact">Add Content </NavLink></li>
                        <li><NavLink to="/contact">Notification </NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navigation;