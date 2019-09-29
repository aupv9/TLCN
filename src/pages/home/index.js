import React, {Component} from 'react';
import {Route} from'react-router-dom';
import Header from "../../components/header";
import Home_Main from "../../components/home-main";
import Footer from "../../components/footer";
import ListXe from "../../components/list-xe";
import './style.scss';
class Home extends Component {


	render() {
		return (
            <>
                <Header />
                    <Route exact
						   path={["/","/home"]}
						   render={(props)=> <Home_Main {...props}/> }/>
                    <Route exact
						   path={["/list-xe/:start/:end/:date","/home/list-xe/:start/:end/:date"]}
						   render={(props)=> <ListXe {...props} /> } />
                <Footer/>
            </>
		);
	}
}
Home.propTypes = {};

export default Home;