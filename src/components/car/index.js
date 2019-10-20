import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow,Button} from "@material-ui/core";
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import StageSeat from "../paper-cho";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CloseIcon from '@material-ui/icons/Close';
import {connect} from "react-redux";
import {putNull} from "../../redux/action";


const useStyles =makeStyles({
    root:{
        width: '100%',
        overflowX: 'auto',
    },
    header:{
        fontSize:18
    },
    button:{
        width: "50px",
        position:"absolute",
        right:0
    }
})
const Car = (props) =>{

    const {putNull,nhaXe,gioDi,noiDi,gioDen,noiDen,timer,time,loaiXe,index,danhSachGhe,lichtrinh}=props;
    const [activeTab,setActiveTabs]=React.useState('1');
    const  toggle = tab => {
        if (activeTab !== tab) {
            setActiveTabs(tab);
        }
    }
    /*Set Null Seat*/
    const setNullSeat=()=>{
        putNull();
    }

    /*Close detail car*/
    const toggleCarByIcon= id =>{
        putNull();
        document.getElementById("carDetail-"+id).style.display="none";

    }
    /**/
    const toggleCarByWrapper = id =>{
        putNull();
        const wrapper=document.getElementsByClassName("detail-wrapper");
        for (let i=0; i<wrapper.length; i++) {
           wrapper[i].style.display="none";
        }
        document.getElementById("carDetail-"+id).style.display="block";

    }
    const classes = useStyles();
    return (
        <>
            <div className="cars-result"
                 style={{marginBottom:"10px"}}
            onClick={()=>toggleCarByWrapper(index)}>
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
                                                                {nhaXe}
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
                                                            <div className="type">{loaiXe}</div>
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
            </div>
            <div className="detail-wrapper"
                 id={`carDetail-`+index}
                 style={{marginBottom:'10px',display:'none'}}>
                <AppBar position="static">
                    <Button className={classes.button}
                            onClick={()=>toggleCarByIcon(index)}
                            ><CloseIcon onClick={()=>toggleCarByIcon(index)}/></Button>
                    <Box component="span"
                         m={5}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active:activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Chi tiết
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active:activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    Đánh Giá
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active:activeTab === '3' })}
                                    onClick={() => {toggle('3'); }}
                                >
                                    Hình Ảnh
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active:activeTab === '4' })}
                                    onClick={() => {toggle('4'); }}
                                >
                                    Chọn Chổ
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <Paper className={classes.root}>
                                            <Table className={classes.table}
                                                   aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="left"
                                                                   style={{fontSize:18,color:'#000',fontWeight:500}}>Thời gian đi</TableCell>
                                                        <TableCell align="left"
                                                                   style={{fontSize:18,color:'#000',fontWeight:500}}>Điểm đến</TableCell>
                                                        <TableCell align="left"
                                                                   style={{fontSize:18,color:'#000',fontWeight:500}}>Địa chỉ</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {lichtrinh.map((row,key) => (
                                                        <TableRow key={key}>
                                                            <TableCell align="left">{row.thoigiandi}</TableCell>
                                                            <TableCell align="left">{row.diemdi}</TableCell>
                                                            <TableCell align="left">{row.diachi}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </Paper>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12">
                                        <h4>Tab 1 Contents</h4>
                                    </Col>

                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                        <h4>Tab 3 Contents</h4>
                                    </Col>

                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col sm="12">
                                        <StageSeat danhSachGhe={danhSachGhe}/>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Box>
                </AppBar>
            </div>
         </>
    );
}

Car.propTypes = {};

export default connect(null,{putNull})(Car);
