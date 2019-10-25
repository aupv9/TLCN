import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {
    Box,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography, Radio,RadioGroup,FormControlLabel,FormControl,FormLabel
} from "@material-ui/core";
import {Button, Col, Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import * as _ from "lodash";
import Seat from "../seat";
import {connect} from "react-redux";
import classnames from "classnames";

const classes=makeStyles({
    root:{
        width: '100%',
        overflowX: 'auto',
    },
    header:{
        fontSize:18
    }
})
const StageSeat =(props)=> {

    /*Map props*/
    const {seats,arrSeat,lichTrinh,start,end}=props;

    /*State activeTab*/
    const [activeTab,setActiveTabs]=React.useState('1');

    /*Xử Lý trước khi gán cho radio*/
    const [listAddressStart,setListAddressStart]=React.useState([]);
    const [listAddressEnd,setListAddressEnd]=React.useState([]);

    /*Value lưu điểm đi và điểm đến*/
    const [valueStart,setValueStart]=React.useState("");
    const [valueEnd,setValueEnd]=React.useState("");

    /*Method filter điểm đi và điểm đến*/
    const handleListStart = () =>{
        //Khởi tạo mảng lưu địa chỉ
        let arrStart=[],arrEnd=[];
        for(const item of lichTrinh){
            if(item.tinh === parseInt(start)){
                arrStart.push(item.thoigiandi+"-"+" "+item.diachi);
            }
            if(item.tinh === parseInt(end)){
                arrEnd.push(item.thoigiandi+"-"+item.diachi);
            }
        }
        setListAddressStart(arrStart);
        setListAddressEnd(arrEnd);
    }

    /*Lifecyle*/
    React.useEffect(()=>{
        handleListStart();
    },[]);

    /*Method select tab*/
    const  toggle = tab => {
        if (activeTab !== tab) {
            setActiveTabs(tab);
        }

    }

    const changeStart= event =>{
        setValueStart(event.target.value);
    }

    const changeEnd = event =>{
        setValueEnd(event.target.value);
    }
    /*Method tính tổng tiền đã đặt*/
        return (
            <>
                <Col md="12"
                    style={{marginLeft:"0"}}>
                    <Paper className={classes.root}>
                        {/*Start header intro seat*/}
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">
                                        <Button style={{marginRight:"5px",
                                            backgroundColor:"#fff"}}></Button>
                                        Ghế Trống
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button  style={{marginRight:"5px",
                                            backgroundColor:"#cfcfcf"}}></Button>
                                        Ghế Đã Đặt
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button style={{marginRight:"5px",
                                            backgroundColor:"#007BFF"}}></Button>
                                        Ghế Đang Đặt
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        {/*    End header seat*/}
                        <Paper style={{padding:"40PX",borderBottomLeftRadius:"0"}}>
                            <Box style={{position:"absolute",bottom:"140px",left:"25px"}}>
                                {/*<img width="25"*/}
                                {/*     className="img-responsive wheel-img"*/}
                                {/*     src="https://storage.googleapis.com/fe-production/images/Route/steering-wheel.svg"/>*/}
                            </Box>

                            <Paper style={{marginLeft:"20px"}}>
                                {/*Render danh sách ghế*/}
                                {
                                    arrSeat.map((item,index)=>
                                        <Seat seat={item}
                                             />
                                    )
                                }
                            </Paper>
                        </Paper>
                    </Paper>
                    <Paper style={{marginTop:"3px",height:"100px"}}>
                        <Typography>
                            <Box textAlign="left"
                                 style={{paddingTop:"10px"}}>
                                Số ghế:
                                {
                                    seats.seat.map(item =>  (
                                            <span >{item.MaGhe}{" "}</span>
                                    ))
                                }<br/>
                                Tổng Tiền:
                                {/*{*/}
                                {/*    this.props.seats.priceSeats*/}
                                {/*}*/}
                                <NumberFormat thousandSeparator={false}
                                              style={{border:"none"}}
                                               value={seats.priceSeats}
                                               suffix={".000đ"} />
                            </Box>
                        </Typography>
                    </Paper>
                    <Paper style={{marginTop:"3px"}}>
                        <Typography style={{fontWeight:"500",fontSize:"20px",marginLeft:"15px"}}>
                            Chọn nơi đi và nơi đến
                        </Typography>
                        <Box>
                            <Nav tabs
                                style={{marginLeft:"50px",marginTop:"20px"}}>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active:activeTab === '1' })}
                                        onClick={() => {toggle('1'); }}
                                    >
                                        Điểm Đi
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active:activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                            >
                                        Điểm Đến
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1"
                                         style={{marginLeft:"50px",marginTop:"20px"}}>
                                    <FormControl component="fieldset"
                                                 >
                                        <FormLabel component="legend">Điểm Đón</FormLabel>
                                        <RadioGroup aria-label="gender"
                                                    onChange={changeStart}
                                                   >
                                            {
                                                listAddressStart.map((item,index)=>{
                                                    return(
                                                        <FormControlLabel
                                                            key={index}
                                                            value={item}
                                                            control={<Radio/>}
                                                            label={item}/>
                                                    );
                                                })
                                            }

                                        </RadioGroup>
                                    </FormControl>
                                </TabPane>
                                <TabPane tabId="2"
                                         style={{marginLeft:"50px",marginTop:"20px"}}>
                                    <FormControl component="fieldset"
                                    >
                                        <FormLabel component="legend">Điểm Đến</FormLabel>
                                        <RadioGroup aria-label="gender"
                                                    onChange={changeEnd}
                                        >
                                            {
                                                listAddressEnd.map((item,index)=>{
                                                    return(
                                                        <FormControlLabel
                                                            key={index}
                                                            value={item}
                                                            control={<Radio/>}
                                                            label={item}/>
                                                    );
                                                })
                                            }

                                        </RadioGroup>
                                    </FormControl>
                                </TabPane>
                                <Paper>
                                    <Typography>
                                        Điểm Đi:
                                        {
                                            valueStart
                                        }
                                    </Typography>
                                    <Typography>
                                        Điểm Đến:
                                        {
                                            valueEnd
                                        }
                                    </Typography>
                                </Paper>
                            </TabContent>
                        </Box>
                    </Paper>
                </Col>
            </>
        );
    }

StageSeat.propTypes = {
    arrSeatIndex:PropTypes.object.isRequired
};
const mapStateToProps=(state)=>({
    seats:state.seat
});
export default connect(mapStateToProps,null)(StageSeat);
