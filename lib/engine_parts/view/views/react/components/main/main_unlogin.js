import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Home from '../login/home.js';
import Login from '../login/login.js';
import Register from '../login/register.js';
import About from '../login/about.js';
import { FormattedMessage } from 'react-intl';

import './main_unlogin.scss';
import '../../../../public/stylesheets/scss/main.scss';


class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="imgBorder"><img className="img" /></div>
                    <h1 className="title">Demo's Blog</h1>
                    <ul role="nav" className="nav">
                        <li className="lead"><Link to="/login"><FormattedMessage id='login.test1' values={{ desc: 'test' }}/></Link></li>
                        <li className="lead"><Link to="/register">註冊</Link></li>
                        <li className="lead"><Link to="/about">關於</Link></li>
				    </ul>
                </div>
                <div className="contents">
                    <Switch>
                        <Route exact path="/users/login" component={Home} />
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>

                <div className="footer">
                    <p>
                        Copyright © Demo 2018
                    </p>
                    <a href='/'>Home</a>
                </div>
                <div className="test">scss: test in main_unlogin.js</div>
            </div>
        );
    }
}

export default Main;
