import React, {Component} from 'react';
import SearchBox from "../search-box-list";
import ListContent from "../list-content";
import IntroList from "../intro-list";

/*
* Component ListXe
* dùng render danh sách các xe tìm được
* @author AuPhan
* */

class ListXe extends Component {

    render() {
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