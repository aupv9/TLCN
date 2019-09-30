import React, {Component} from 'react';
import './style.scss';
import LeftSearch from "../col-left";
import ListResult from "../list-result";
import * as types from "../../redux/type";


class ListContent extends Component {




    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="pageContainer">
                    <div className="keel-grid">
                        <div className="col-left">
                            <LeftSearch params={this.props.params}/>
                        </div>
                        <div className="col-list-body animated">
                            <div className="listInner">
                               <ListResult params={this.props.params}/>
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


export default (ListContent);