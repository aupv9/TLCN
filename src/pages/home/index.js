import React, {Component} from 'react';
import {Route, useHistory,Switch,Redirect} from'react-router-dom';
import Header from "../../components/header";
import Footer from "../../components/footer";
import './style.scss';
import homeRoutes from '../../routes.js';
import ListXe from "../../components/list-xe";
import SignIn from "../../components/signin";
import Payment from "../../components/payment";
import SignUp from "../../components/signup";
import SearchTicket from "../../components/search-ticket";
import Home_Main from "../../components/home-main";
import Admin from "../admin";
import User from '../admin/user';
import Xe from '../admin/xe';
import Ve from '../admin/ve';

import AddUser from "../admin/add-user";
import AddXe from "../admin/xe-add";
/*
* Class Home Component Home
* Used render giao diện trang chính
* @author AuPhan
*/

  
class Home extends Component  {


	/*
	* Method render component dựa vào route
	* */
	render(){
		return (
            <>
                <Header ></Header>
					{/* <Home_Main props={props}></Home_Main> */}
					<Route exact
						   path={[`/`]}
						   render={(props)=> <Home_Main {...props} /> }
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
					/>
					<Route
						exact
						path="/admin" 
						component={Admin} />
					<Route
          				exact
						path="/admin/user"
						component={User} />
					<Route
						exact
					  path="/admin/xe"
					  component={Xe} />
					  <Route
						exact
						path="/admin/ve" 
						component={Ve} />
					  <Route 
					  path="/admin/user/add"
					  component={AddUser} />
					  <Route 
					  path="/admin/xe/add"
					  component={AddXe} />
				<Footer></Footer>
            </>
		);

	}
		
}
Home.propTypes = {};

export default Home;
