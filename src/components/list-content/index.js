import React, {Component} from 'react';
import './style.scss';
import LeftSearch from "../col-left";
import {getCar} from "../../redux/action";
import {connect} from 'react-redux';

class ListContent extends Component {
    render() {

        return (
            <>
                <div className="pageContainer">
                    <div className="keel-grid">
                        <div className="col-left">
                            <LeftSearch />
                        </div>
                        <div className="col-list-body">
                            s
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
        getCars: (start,end,date) => {
            dispatch(getCar(start,end,date));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(ListContent);