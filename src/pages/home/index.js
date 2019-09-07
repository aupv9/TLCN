import React, {Component} from 'react';
import {Route} from'react-router-dom';
import Header from "../../components/header";
import Home_Main from "../../components/home-main";
import Footer from "../../components/footer";
import ListXe from "../../components/list-xe";
import './style.scss';
class Home extends Component {

	componentWillMount() {
		console.log(this.props.match.url);
	}
	render() {
		return (
            <>
                <Header />
                    <Route exact
						   path={["/","/home"]}
						   render={()=> <Home_Main/> }/>
                    <Route exact
						   path={["/list-xe","/home/list-xe"]}
						   render={()=> <ListXe/> } />
                <Footer/>
            </>
		);
	}
}
Home.propTypes = {};

export default Home;