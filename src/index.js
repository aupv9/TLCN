import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import 'sweetalert2/src/sweetalert2.scss'
import Home from './pages/home';
import ListXe from "./components/list-xe";
import SignIn from "./components/signin";
import Payment from "./components/payment";
import SignUp from "./components/signup";
import SearchTicket from "./components/search-ticket";
import Admin from './pages/admin';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>

    <Router >
        <Switch>
        	<Route 
            path="/" 
            component={Home} />
                    {/* <Route exact
						   path={[`/`]}
						   render={(props)=> < {...props} /> }
						   />
					<Route exact
						   path={[`/list-xe/:start/:end/:date`]}
						   render={(props)=> <ListXe {...props} /> }
						   />
					<Route exact
						   path={["/sign-in"]}
						   render={(props)=> <SignIn {...props} />}
					/>
					<Route exact
						   path={["/sign-up"]}
						   render={(props)=> <SignUp {...props} />}
					/>
					 <Route exact
						   path={["/payment","/home/payment"]}
						   render={(props)=> <Payment {...props} />}
					/>
					 <Route exact
						   path={["/ticketinfo","/home/ticketinfo"]}
						   render={(props)=> <SearchTicket {...props} />}
					/> */}
					<Route
					exact
					path="/admin" 
					component={Admin} />
    

        
        </Switch>
    </Router>

    </Provider>
    ,
document.getElementById('root'));
serviceWorker.unregister();
