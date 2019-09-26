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
                                                                        <div className="top">
                                                                            <img src={"https://content.r9cdn.net/rimg/provider-logos/airlines/v/VJ.png?crop=false&amp;width=108&amp;height=92&amp;fallback=default2.png&amp;_v=b07fe173a0b8c5b03cf17378f234f88817558185"}
                                                                                 alt="logo VietJet Air" />
                                                                        </div>
                                                                        <div className="bottom">
                                                                            111
                                                                        </div>

                                                                    </div>
                                                                    <div className="col-field time-start">
                                                                            222
                                                                    </div>
                                                                    <div className="col-field route">
                                                                        <div className="axis"></div>
                                                                    </div>
                                                                    <div className="col-field time-end">
                                                                        222
                                                                    </div>
                                                                    <div className="col-field info-car">
                                                                        ss
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