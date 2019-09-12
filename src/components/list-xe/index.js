import React, {Component} from 'react';
import IntroList from "../intro-list";
import SearchBox from "../search-box-list";
import ListContent from "../list-content";

class ListXe extends Component {

    render() {
        return (
            <>
               <IntroList/>
                <SearchBox/>
                <ListContent/>
            </>
        );
    }
}

ListXe.propTypes = {};

export default ListXe;