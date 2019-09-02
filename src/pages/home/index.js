import React, {Component} from 'react';
import {Route} from'react-router-dom'
import Header from "../../components/header";
import Home_Main from "../../components/home-main";
import Footer from "../../components/footer";
import ListXe from "../../components/list-xe";
import './style.scss'
class Home extends Component {

    componentWillMount() {
        console.log(this.props.match.url)
    }

    render() {
        return (
            <>
                <Header></Header>
                    <Route exact  path={["/","/home"]} render={()=><Home_Main/>}></Route>
                    <Route exact  path={["/list-xe","/home/list-xe"]}  render={()=><ListXe/>}></Route>
                <Footer></Footer>
            </>
        );
    }
}

Home.propTypes = {};

export default Home;