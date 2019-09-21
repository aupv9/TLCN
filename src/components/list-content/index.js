import React, {Component} from 'react';
import './style.scss';
import LeftSearch from "../col-left";

class ListContent extends Component {
    render() {

        return (
            <>
                <div className="pageContainer">
                    <div className="keel-grid">
                        <div className="col-left">
                            <LeftSearch params={this.props.params}/>
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

export default ListContent;