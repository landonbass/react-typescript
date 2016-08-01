"use strict";

const styles = require("./app.css"); //required to inject primary stylesheet

import * as React    from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute } from "react-router"

import App                          from "./components/App/App";
import Home                         from "./components/Home/Home"; 
import About                        from "./components/About/About";

//let links : Array<LeftNavItem> = [{text:"home", href: "#"}, {text:"settings", href: "#"}, {text:"my queries", href: "#"}, {text:"export", href: "#"}];

ReactDOM.render(
    <div id="wrapper">
        <Router history={browserHistory}>
            <Route path ="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path ="/about" component={About}/>          
            </Route>
        </Router>
    </div>,
    document.getElementById("container")
)

