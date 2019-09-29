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

    componentWillMount() {
    }


    constructor(props) {
        super(props);

        this.state={
            checkNhaXe:this.props.checkNhaXe,
            checkGioDi:this.props.checkGioDi
        };
    }
    /*
    * Render list check search nhà xe
    * */
    listCheckNhaXe=()=>{
        return(
            this.props.checkNhaXe.map((item,index)=>{
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
            this.props.checkGioDi.map((item,index)=>{
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
                            <span>{item.name}</span><span>:00</span>
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
        let checkGioDi = [...this.state.checkGioDi];
        checkGioDi[index] = { name: checkGioDi[index].name, check:event.target.checked};
        this.setState({ checkGioDi });
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
