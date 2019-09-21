import React, {Component} from 'react';
import SearchBox from "../search-box-list";
import ListContent from "../list-content";
import IntroList from "../intro-list";
import {connect} from 'react-redux';

class ListXe extends Component {

    render() {
        // console.log(this.props.match.params);
        const params=this.props.match.params;
        return (
            <>
               <IntroList/>
                <SearchBox/>
                <ListContent params={params}/>
            </>
        );
    }
}

ListXe.propTypes = {};

export default ListXe;