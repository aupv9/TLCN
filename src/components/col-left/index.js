import React, {Component} from 'react';

class LeftSearch extends Component {
    render() {
        return (
            <>
                <div className="base-result-rail">
                    <div className="result-count">
                        <div className="common-filter">
                            <div className="count-grid">
                                <div className="count">
                                    <p>Có tổng cộng là <span></span> chuyến</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Fiter list container*/}
                    <div className="filterListContainer">
                        <div className="filter-list">

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LeftSearch;