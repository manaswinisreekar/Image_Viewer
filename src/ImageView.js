import React, {Component, Fragment} from 'react'
import {Route, Switch} from "react-router-dom";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";

class ImageViewer extends Component {
    render() {
        return <Fragment>
            <Switch>
                <Route exact path='/' render={(props) => <Login/>}/>
                <Route exact path='/' render={(props) => <Login {...props}/>}/>
                <Route exact path='/home' render={(props) => <Home {...props}/>}/>
            </Switch>
        </Fragment>
    }
}
