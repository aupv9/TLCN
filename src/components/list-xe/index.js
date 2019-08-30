import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import IntroList from "../intro-list";
import SearchBox from "../search-box-list";

class ListXe extends Component {
    componentWillMount() {
        console.log("hello")
    }
    render() {
        return (
            <>
               <IntroList/>
                <SearchBox/>
            </>
        );
    }
}

ListXe.propTypes = {};

export default ListXe;