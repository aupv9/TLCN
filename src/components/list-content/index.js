import React, {Component} from 'react';
import './style.scss';
import LeftSearch from "../col-left";
import ListResult from "../list-result";
import * as types from "../../redux/type";
import {getCar} from "../../redux/action";
import {connect} from "react-redux";

class ListContent extends Component {

    componentWillMount() {
        this.props.getCars(this.props.params.start,this.props.params.end,this.props.params.date);
    }
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
            for (let item of setGioDi) arrGioDi.push({name:item,check:false});

            this.setState(state =>({
                checkNhaXe:arrNhaXe,
                checkGioDi:arrGioDi
            }));
        }

    }

    constructor(props) {
        super(props);
        this.props.getCars(this.props.params.start,this.props.params.end,this.props.params.date);
        this.state={
            checkNhaXe:[{name:"",check:false}],
            checkGioDi:[{name:0,check:false}]
        };
    }
    render() {
        return (
            <>
                <div className="pageContainer">
                    <div className="keel-grid">
                        <div className="col-left">
                            <LeftSearch checkNhaXe={this.state.checkNhaXe}
                                        checkGioDi={this.state.checkGioDi}/>
                        </div>
                        <div className="col-list-body animated">
                            <div className="listInner">
                               <ListResult />
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