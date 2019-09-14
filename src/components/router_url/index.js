import React, {Component} from 'react';
import {Switch,Route} from'react-router-dom'
import Home from "../../pages/home";

class Router_URL extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route  path={"/"}
                            component={Home}></Route>
                </Switch>
            </>
        );
    }
}


export default Router_URL;