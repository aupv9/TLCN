import React, {Component} from 'react';
import SearchBox from "../search-box-list";
import ListContent from "../list-content";
import IntroList from "../intro-list";

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