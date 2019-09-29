import React, {Component} from 'react';
import './style.scss';
import LeftSearch from "../col-left";
import ListResult from "../list-result";
import {connect} from "react-redux";


class ListContent extends Component {
    render() {
        console.log(this.props.filterCarReducer);
        return (
            <>
                <div className="pageContainer">
                    <div className="keel-grid">
                        <div className="col-left">
                            <LeftSearch params={this.props.params}/>
                        </div>
                        <div className="col-list-body animated">
                            <div className="listInner">
                               <ListResult />
                            </div>
                        </div>
                        <div className="col-right">
                            s
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps=(state)=>({
    filterCarReducer:state.filterCarReducer
});
const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ListContent);