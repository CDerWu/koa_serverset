
import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Home from '../login/home.js';
import style from './default_page.css';
//import About from '../login/about.js';


class Main extends React.Component {
    render() {
        return (
            <div className={style.whole}>
                <div className={style.navbar}>
                    <div className={style.imgBorder}><img className={style.img} /></div>
                    <h1 className={style.title}>Demo's Blog</h1>
                    {/* <ul role="nav" className={style.nav}>
                        <li className={style.lead}><Link to="/about">關於</Link></li>
                    </ul> */}
                </div>
                <div className={style.contents}>
                    <Switch>
                        <Route exact path="/home/my" component={Home} />
                        {/* <Route path="/about" component={About}/> */}
                    </Switch>
                </div>
                <div className={style.footer}>
                    
                    <p>
                        Copyright © Demo 2018
                    </p>
                    <a href='/'>Home</a>
                </div>
            </div>
        );
    }
}

export default Main;
