import React, {Component} from 'react';
import './style.scss';
import * as types from "../../redux/type";
import {Checkbox,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography} from "@material-ui/core";
import {getCar} from "../../redux/action";
import {connect} from "react-redux";
import * as _ from "lodash";

class ListContent extends Component {


    /*
   * Khi state thay đổi từ kết quả gọi service trả về từ server sẽ tiến hành xử lý
   * */
    componentWillReceiveProps(nextProps, nextContext) {
        const filter=nextProps.filterCarReducer;
        //khi action thành công
        if(filter.action === types.GET_LIST_CAR_SUCCESS){
            let setNhaXe=new Set();
            let setGioDi=new Set();
            let arrNhaXe=[];
            let arrGioDi=[];
            filter.data.forEach((elment)=>{
                setNhaXe.add(elment.nhaxe);
                elment.lichtrinh.forEach(item =>{
                    if(item.tinh === parseInt(this.props.params.start)){
                        setGioDi.add(item.thoigiandi);
                    }
                });
            });
            for (let item of setNhaXe) arrNhaXe.push({name:item,check:false});
            for (let item of setGioDi) arrGioDi.push({name:item,check:false});

            this.setState(state =>({
                checkNhaXe:arrNhaXe,
                checkGioDi:arrGioDi,
                arrCar:filter.data,
                arrCarTemp:filter.data,

            }));
        }
    }
    /*Hàm khởi tạo 1 trong init mount của react chạy trước đi component được render*/
    constructor(props) {
        super(props);
        this.props.getCars(this.props.params.start,this.props.params.end,this.props.params.date);
        this.state={
            checkNhaXe:[{name:"",check:false}],
            checkGioDi:[{name:"",check:false}],
            arrCar:[],
            arrFilter:[],
            arrGioDiFilter:[]
        };

    }
    /*
    * Render list check search nhà xe
    * */
    listCheckNhaXe=()=>{
        return(
            this.state.checkNhaXe.map((item,index)=>{
                return (
                    <>
                        <p key={index}
                           style={{width:'220px',textAlign:'left',margin:'auto'}}>
                            <Checkbox
                                onChange={this.handleCheckNhaXe(index)}
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                }}
                            />
                            {/*<input type="checkbox"*/}
                            {/*       key={index}*/}
                            {/*       onChange={this.handleCheckNhaXe(index)}/>*/}
                            <span>{item.name}</span>
                        </p>
                    </>
                );
            })
        );
    }
    /*
   * Render list check search giờ đi
   * */
    listCheckGioDi=()=>{
        return(
            this.state.checkGioDi.map((item,index)=>{
                return(
                    <>
                        <p key={index}
                           style={{width:'220px',textAlign:'left',margin:'auto'}}>
                            <Checkbox
                                onChange={this.handleCheckGioDi(index)}
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                }}
                            />
                            <span>{item.name}</span><span></span>
                        </p>
                    </>
                );
            })
        );
    }
    /*
    * Method change from checkbox render check nhà xe
    * */
    handleCheckNhaXe = index => event => {
        let checkNhaXe = [...this.state.checkNhaXe];
        checkNhaXe[index] = { name: checkNhaXe[index].name,check:event.target.checked};
        this.setState({ checkNhaXe });
    };
    /*
    * Method change from checkbox render check giờ đi
    * */
    handleCheckGioDi = index => event => {
        /*
        * Khi check box được click chọn
        */
        if(event.target.checked){
            /* Check giờ đi đã được chọn chưa*/
            if(this.checkItemArrGioDi(this.state.checkGioDi[index])){
                /* Add giờ đi vào mảng */
                this.state.arrGioDiFilter.push(this.state.checkGioDi[index].name);
                console.log(this.state.arrGioDiFilter);
                /* Filter danh sách theo giờ đi*/
                /*Duyệt qua arrCar để filter theo giờ đi*/
                this.state.arrCarTemp.forEach((item)=>{
                    /*Duyệt qua lịch trình của car trong list*/
                    for(let ii=0; ii<item.lichtrinh.length; ii++) {
                        /*Check thời gian đi có nằm trong list filter không && kèm với tỉnh xuất phát*/
                        if(_.indexOf(this.state.arrGioDiFilter,
                            item.lichtrinh[ii].thoigiandi) !== -1
                            &&
                            item.lichtrinh[ii].tinh === parseInt(this.props.params.start)){
                            /*Check car có nằm trong arr filter chưa nếu chưa thì push vào*/
                            if(!this.checkItemArrFilter(item)){
                                this.state.arrFilter.push(item);
                                /*Update state arrCar reRender  giao diện*/
                                this.setState(state =>({arrCar:state.arrFilter}));
                            }
                        }
                    }
                });
            }
           // console.log(this.state.arrFilter);
        }else{
            if(_.isEmpty(this.state.arrGioDiFilter)){
                console.log("empty");
                this.setState(state =>({arrCar: state.arrCarTemp}));
            }else{
                /* Index để remove item từ arrFilterGioDi*/
                let indexGioDi=0;
                for(let ii = 0; ii < this.state.arrGioDiFilter.length;ii++){
                    if(this.state.arrGioDiFilter[ii] === this.state.checkGioDi[index].name){
                        indexGioDi=ii;
                    }
                }
                this.state.arrFilter.forEach((item,key) =>{
                    const lichTrinh=item.lichtrinh;
                    for(const index in lichTrinh){
                        if(lichTrinh[index].thoigiandi === this.state.arrGioDiFilter[indexGioDi]){
                            console.log(key);
                            this.state.arrFilter.splice(key,1);
                            //_.pull(this.state.arrFilter,item);
                        }
                    }
                });
                this.setState(state=>({arrCar: state.arrFilter}));
                console.log(this.state.arrFilter);
                this.state.arrGioDiFilter.splice(indexGioDi,1);
            }
            if(_.isEmpty(this.state.arrGioDiFilter)){
                this.setState(state =>({arrCar: state.arrCarTemp}));
            }
        }
    };
    /*Method check item in arrFilter*/
    checkItemArrFilter= item =>{
        for (const element of this.state.arrFilter){
            if(element._id === item._id) return true;
        }
        return false;
    }
    /*Method check item in arrFilterGioDi*/
    checkItemArrGioDi= item =>{
        for(const element of this.state.arrGioDiFilter){
            if(item === element){
                return false;
            }
        }
        return true;
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
            let gioDen=0,gioDi=0;
            let noiDi="";
            let noiDen="";

            for (let ii = 0 ; ii < item.lichtrinh.length ; ii++){
                if(item.lichtrinh[ii].tinh === parseInt(this.props.params.start)){
                    gioDi=item.lichtrinh[ii].thoigiandi;
                    noiDi=item.lichtrinh[ii].diemdi;
                    break;
                }
            }
            for (let ii = 0 ; ii < item.lichtrinh.length ; ii++){
                if(item.lichtrinh[ii].tinh === parseInt(this.props.params.end)){
                    gioDen=item.lichtrinh[ii].thoigiandi;
                    noiDen=item.lichtrinh[ii].diemdi;
                    break;
                }
            }
            const allTimeSplitGioDen=gioDen.split(":");
            const allTimeFirstGioDen=allTimeSplitGioDen[0]+allTimeSplitGioDen[1];
            const allTimeSplitGioDi=gioDi.split(":");
            const allTimeFirstGioDi=allTimeSplitGioDi[0]+allTimeSplitGioDi[1];
            var allTime=0;
            if(allTimeSplitGioDen[1] > 0){
                allTime=allTimeFirstGioDen - allTimeFirstGioDi;
            }else{
                allTime=allTimeFirstGioDen - allTimeFirstGioDi -40;
            }
            var timer=Math.floor(allTime / 100),time=allTime % 100;

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
                                                                        <div className="depart-time ">{gioDi}</div>
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
    render() {
        return (
            <>
                <div className="pageContainer">
                    <div className="keel-grid">
                        <div className="col-left">
                            {/*Start col-left*/}
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
                                        <div >
                                            <ExpansionPanel>
                                                <ExpansionPanelSummary >
                                                    <Typography>HÃNG XE </Typography>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <Typography>
                                                        {this.listCheckNhaXe()}
                                                    </Typography>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                            <ExpansionPanel>
                                                <ExpansionPanelSummary >
                                                    <Typography >GIỜ ĐI</Typography>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <Typography>
                                                        {
                                                            this.listCheckGioDi()
                                                        }
                                                    </Typography>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                            <ExpansionPanel>
                                                <ExpansionPanelSummary >
                                                    <Typography >NƠI ĐI</Typography>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <Typography>

                                                    </Typography>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-list-body animated">
                            <div className="listInner">
                                <div className="resultsContainer">
                                    <div className="search-result-list">
                                        {/*Begin*/}
                                        {this.renderCars()}
                                    </div>
                                </div>
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
        getCars: (start,end,date) => {
            dispatch(getCar(start,end,date));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ListContent);