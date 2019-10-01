import React, {Component} from 'react';
import {connect} from "react-redux";
import * as _ from 'lodash';
import * as types from "../../redux/type";
import {getCar} from "../../redux/action";

class ListResult extends Component {


    constructor(props) {
        super(props);
        this.state={
            arrCar:[]
        };
    }

    componentWillMount() {
        console.log(this.props.filterCarReducer);
        this.props.getCars(this.props.params.start,this.props.params.end,this.props.params.date);

    }
    componentWillReceiveProps(nextProps, nextContext) {
        const filter=nextProps.filterCarReducer;
        //khi action thành công
        if(filter.action === types.GET_LIST_CAR_SUCCESS){

            this.setState({
                arrCar:filter.data
            });
        }
        console.log(this.state);
    }
    renderCars=()=>{

        return this.state.arrCar.map((item,index)=>{
            const gioden=0;

            return (
                <>
                <div className="cars-result"
                     key={index}>
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
                                                                <div className="top">
                                                                    <div className="depart-time ">16:00</div>
                                                                </div>
                                                                <div className="bottom">phan rang</div>
                                                            </div>
                                                            <div className="col-field route">
                                                                <div className="time">8h</div>
                                                                <div className="axis"></div>
                                                            </div>
                                                            <div className="col-field time-end">
                                                                <div className="top">
                                                                    <div className="depart-time ">16:00</div>
                                                                </div>
                                                                <div className="bottom">phan rang</div>
                                                            </div>
                                                            <div className="col-field info-car">
                                                                <div className="type">{item.loaixe}</div>
                                                            </div>
                                                            <div className="col-field evaluate">
                                                                <div className="start-eval">15 chỗ</div>
                                                            </div>
                                                            <div className="col-field detail">
                                                                <div className="top-row">
                                                                    <img src={"https://img.icons8.com/ios-glyphs/30/000000/share.png"} />
                                                                </div>
                                                                <div className="show-detail">
                                                                    <div className="dropdown-detail">
                                                                        sss
                                                                    </div>
                                                                    <div className="button-detail">
                                                                        <button><span>Chọn Chỗ</span></button>
                                                                    </div>
                                                                </div>
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
                </div></>
            );
        });

    }

    render() {
        return (
            <>
                <div className="resultsContainer">
                    <div className="search-result-list">
                        {/*Begin*/}
                        {this.renderCars()}
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

export default connect(mapStateToProps,mapDispatchToProps)(ListResult);