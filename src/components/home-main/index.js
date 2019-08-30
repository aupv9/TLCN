import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Carousel from "../carousel";
import NavTab from "../nav-tabs";
import BusNet from "../bus-net";

class Home_Main extends Component {
    render() {
        return (
            <>
                <Carousel />
                <NavTab />
                <BusNet/>
            </>
        );
    }
}

Home_Main.propTypes = {};

export default Home_Main;