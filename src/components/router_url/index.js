import React, {Component} from 'react';
import {Switch,Route} from'react-router-dom';
import Home from "../../pages/home";
import Payment from '../payment';
class Router_URL extends Component {

    render() {
        return (
            <>
                <Switch>
                   <Route  exact
						  path={["/","/home"]}
                          component={({ props }) => (
                         <Home  {...props} />
                            )}
                          />
                     <Route 
                           exact
						   path={["/payment","/home/payment"]}
                           component={({ props }) => (
                         <Payment {...props} />
                            )}
                          />
                </Switch>
            </>
        );
    }
}


export default Router_URL;
