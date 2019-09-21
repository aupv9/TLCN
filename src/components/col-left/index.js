import React, {Component} from 'react';
import {ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Checkbox,Typography
} from "@material-ui/core";
// import ExpandMore from '@material-ui/icons/ExpandMore';
import {getCar} from "../../redux/action";
import {connect} from "react-redux";
import * as types from '../../redux/type';

class LeftSearch extends Component {

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
                setGioDi.add(elment.giodi);
            });
            for (let item of setNhaXe) arrNhaXe.push({name:item,check:false});
            for (let item of setGioDi) arrGioDi.push(item);

            this.setState(state =>({
                checkNhaXe:arrNhaXe,
                checkGioDi:arrGioDi
            }));
        }
        console.log(filter.data);

    }


    constructor(props) {
        super(props);
        this.props.getCars(this.props.params.start,this.props.params.end,this.props.params.date);

        this.state={
            checkNhaXe:[{name:"",check:false}],
            checkGioDi:[]
        };
    }

    listCheck=()=>{
        return(
            this.state.checkNhaXe.map((item,index)=>{
                return (
                       <>
                       <input type="checkbox"
                              key={index}
                              onChange={this.handleCheckNhaXe(index)}/>
                           <span>{item.name}</span></>
                );
            })
        );
    }
    handleCheckNhaXe = index => event => {
        let checkNhaXe = [...this.state.checkNhaXe];
        checkNhaXe[index] = { name: checkNhaXe[index].name,check:event.target.checked}
        this.setState({ checkNhaXe });
        console.log(this.state);
    };
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
                            <div >
                                <ExpansionPanel>
                                    <ExpansionPanelSummary >
                                        <Typography>HÃNG XE </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            {this.listCheck()}
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
                                                this.state.checkGioDi.map((item,index)=>{
                                                    return(
                                                        <>
                                                        <input type="checkbox"
                                                               key={index}
                                                               onChange={this.handleCheckNhaXe(index)}/>
                                                        <span>{item}</span></>
                                                    );
                                                })
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
            </>
        );
    }
}

// LeftSearch.prototype={
//     filterCarReducer:PropTypes.object.required
// }

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
export default connect(mapStateToProps,mapDispatchToProps)(LeftSearch);
