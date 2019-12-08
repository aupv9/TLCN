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
/*
* Class Home Component Home
* Used render giao diện trang chính
* @author AuPhan
*/
const switchRoutes = (

	<Switch>
	  {homeRoutes.map((prop, key) => {
		if (prop.layout === "/") {
           
		  return (
			<Route
			  path={prop.layout + prop.path}
			  component={prop.component}
			  key={key}
			/>
		  );
		}
	  })}

	</Switch>
	
  );
const Home =()=>  {


	/*
	* Method render component dựa vào route
	* */
		return (
            <>
                <Header ></Header>
					<Home_Main></Home_Main>
				<Footer></Footer>
            </>
		);

}
Home.propTypes = {};

export default Home;
