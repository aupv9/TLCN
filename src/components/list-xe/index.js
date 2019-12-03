import React, {Component} from 'react';
import ListContent from "../list-content";
import IntroList from "../intro-list";
import SearchHeader from "../search-header";
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
               {/* <IntroList/> */}
               <SearchHeader {...this.props}></SearchHeader>
                <ListContent params={params}
                    {...this.props}
                />
            </>
        );
    }
}

ListXe.propTypes = {};

export default ListXe;
