import React, {Component} from 'react';
import {Route} from'react-router-dom';
import Header from "../../components/header";
import Home_Main from "../../components/home-main";
import Footer from "../../components/footer";
import ListXe from "../../components/list-xe";
import SignIn from "../../components/signin";
import SignUp from "../../components/signup";
import Payment from "../../components/payment";

import './style.scss';

/*
* Class Home Component Home
* Used render giao diện trang chính
* @author AuPhan
*/

class Home extends Component {

	/*
	* Method render component dựa vào route
	* */
	render() {
		return (
            <>
                <Header />
                    <Route exact
						   path={["/"]}
						   render={(props)=> <Home_Main {...props}/> }
						   />
                    <Route exact
						   path={[`/list-xe/:start/:end/:date`]}
						   render={(props)=> <ListXe {...props} /> } 
						   />
					<Route exact
						   path={["/sign-in"]}
						   render={(props)=> <SignIn {...props} />}
					/>
					<Route 
						   path={["/sign-up"]}
						   render={(props)=> <SignUp {...props} />}
					/>
					 <Route 
						   path={["/payment","/home/payment"]}
						   render={(props)=> <Payment {...props} />}
					/>
					
                <Footer/>
				
            </>
		);
	}
}
Home.propTypes = {};

export default Home;
