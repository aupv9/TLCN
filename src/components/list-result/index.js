import React, {Component} from 'react';
import {connect} from "react-redux";
import * as _ from 'lodash';
import * as types from "../../redux/type";
import {getCar} from "../../redux/action";
import * as LIST from "../../contants";


/*
* ListResult class
* used render ListResult component
* @author AuPhan
*
* */
class ListResult extends Component {

    /*
    * Contructor
    * */
    constructor(props) {
        super(props);
        this.state={
            arrCar:[]
        };
    }
    /*
    * Method được thực hiện trước khi component được render lại
    *
    * */
    componentWillMount() {
        //gọi đến method getCars để lấy dữ liệu về
        this.props.getCars(this.props.params.start,this.props.params.end,this.props.params.date);
    }

    /*
    * Method được thực hiện khi props được update và trước khi component render lại
    * */
    componentWillReceiveProps(nextProps, nextContext) {
        const filter=nextProps.filterCarReducer;
        //khi action thành công
        if(filter.action === types.GET_LIST_CAR_SUCCESS){
            this.setState({
                arrCar:filter.data
            });
        }
    }

    /*
    * Method thực hiện việc render cho danh sách các xe đạt tiêu chuẩn
    * return về jsx hiển thị ra display
    * */
    renderCars=()=>{
        return this.state.arrCar.map((item,index)=>{
            /*
            * Tiền xử lý trước khi hiện thị dữ liệu cho người dùng
            * */
            let gioDen=0;
            let noiDi="";
            let noiDen="";

            for (let ii = 0 ; ii < item.lichtrinh.length ; ii++){
                if(item.lichtrinh[ii].tinh === parseInt(this.props.params.end)){
                    gioDen=item.lichtrinh[ii].thoigiandi;
                    noiDen=item.lichtrinh[ii].diemdi;
                    break;
                }
            }
            for (let ii = 0 ; ii < LIST.LIST_PROVINCE.length ; ii++){
                if(parseInt(this.props.params.start) === LIST.LIST_PROVINCE[ii].MA){
                    noiDi=LIST.LIST_PROVINCE[ii].NAME;
                }
            }
            console.log(gioDen);
            const allTimeSplitGioDen=gioDen.split(":");
            const allTimeFirstGioDen=allTimeSplitGioDen[0]+allTimeSplitGioDen[1];
            const allTimeSplitGioDi=item.giodi.split(":");
            const allTimeFirstGioDi=allTimeSplitGioDi[0]+allTimeSplitGioDi[1];
            var allTime=0;
            if(allTimeSplitGioDen[1] > 0){
                allTime=allTimeFirstGioDen - allTimeFirstGioDi;
            }else{
                allTime=allTimeFirstGioDen - allTimeFirstGioDi -40;
            }
            var timer=Math.floor(allTime / 100),time=allTime % 100;
            // while(time > 0) {
            //      console.log(time % 100);
            //      time= Math.floor(timer / 10);
            // }

            console.log( time);


            return (
                <>
                <div className="cars-result"
                     style={{marginBottom:'10px'}}
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
                                                                    <i
                                                                        className="fas fa-bus"></i>
                                                                    {/*<img src={item.hinhanh}*/}
                                                                    {/*     alt="" />*/}
                                                                </div>
                                                                <div className="bottom">
                                                                    {item.nhaxe}
                                                                </div>

                                                            </div>
                                                            <div className="col-field time-start">
                                                                <div className="top">
                                                                    <div className="depart-time ">{item.giodi}</div>
                                                                </div>
                                                                <div className="bottom">{noiDi}</div>
                                                            </div>
                                                            <div className="col-field route">
                                                                <div className="time">{timer}h{time}</div>
                                                                <div className="axis"></div>
                                                            </div>
                                                            <div className="col-field time-end">
                                                                <div className="top">
                                                                    <div className="depart-time ">{gioDen}</div>
                                                                </div>
                                                                <div className="bottom">{noiDen}</div>
                                                            </div>
                                                            <div className="col-field info-car">
                                                                <div className="type">{item.loaixe}</div>
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
    /*
    * method render giao diện của component
    * */
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

/*
* Map state từ redux store thành props của component
* */
const mapStateToProps=(state)=>({
    filterCarReducer:state.filterCarReducer
});
/*
*Map event component với dispatch action của redux
*
* */
const mapDispatchToProps = dispatch => {
    return {
        getCars: (start,end,date) => {
            dispatch(getCar(start,end,date));
        }
    };
};
/*
* Connect component với redux
* */
export default connect(mapStateToProps,mapDispatchToProps)(ListResult);