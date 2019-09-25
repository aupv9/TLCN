import React, {Component} from 'react';

class ListResult extends Component {
    render() {
        return (
            <>
                <div className="resultsContainer">
                    <div className="search-result-list">
                        {/*Begin*/}
                        <div className="cars-result">
                            <div className="result-wrapper">
                                <div className="result-inner">
                                    <div className="grid-inner">
                                        <div className="col-info">
                                            <div className="main-info">
                                                <div className="cars-result-info">
                                                    <ol className="cars">
                                                        <li className="car">
                                                            <div className="cars-result-lefinfo">
                                                                <div className="v-c-p">
                                                                    <div className="col-field carrier">
                                                                            11
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ListResult;