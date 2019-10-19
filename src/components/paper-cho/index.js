import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import {Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";

class StageSeat extends Component {
    render() {
        return (
            <>
                <div className="detail-wrapper"
                     id={`carDetail-`+index}
                     style={{marginBottom:'10px',display:'block'}}>
                    <AppBar position="static">
                        <Box component="span"
                             m={5}>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        Chi tiết
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                    >
                                        Đánh Giá
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => { this.toggle('3'); }}
                                    >
                                        Hình Ảnh
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '4' })}
                                        onClick={() => { this.toggle('4'); }}
                                    >
                                        Chọn Chổ
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
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
                                                        {item.lichtrinh.map((row,key) => (
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
                                                                    backgroundColor:"#BADF41"}}></Button>
                                                                Ghế Đang Đặt
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                                {/*    End header seat*/}



                                                <Paper style={{padding:"40PX",borderBottomLeftRadius:"0"}}>
                                                    <Box style={{position:"absolute",bottom:"50px",left:"25px"}}>
                                                        <img width="20"
                                                             className="img-responsive wheel-img"
                                                             src="https://storage.googleapis.com/fe-production/images/Route/steering-wheel.svg"/>
                                                    </Box>
                                                    <Box style={{marginLeft:"20px"}}>
                                                        {
                                                            item.danhsachghe.map((item,key)=>{
                                                                if(key === 6){
                                                                    return (
                                                                        <>
                                                                            <Button className={`btn-seat normal ${item.dat? "kicked" : "select-seat"}`}
                                                                                    disabled={item.dat}
                                                                                    onClick={()=>this.putSeat(item)}>{item.stt}</Button><br/>
                                                                        </>
                                                                    );
                                                                }else{
                                                                    return (
                                                                        <>
                                                                            <Button className={`btn-seat normal ${item.dat? "kicked" : "un-kicked"}`}
                                                                                    disabled={item.dat}
                                                                                    onClick={()=>this.putSeat(item)}>{item.stt}</Button>
                                                                        </>
                                                                    );
                                                                }
                                                            })
                                                        }
                                                    </Box>

                                                </Paper>

                                            </Paper>
                                            <Paper style={{marginTop:"3px"}}>
                                                <Typography>
                                                    <Box textAlign="left"
                                                         style={{marginLeft:"10px",paddingTop:"10px"}}>
                                                        Số ghế:
                                                        {this.state.arrFilter[0]}
                                                        {
                                                            this.state.arrSeatIndex.map((item,key)=>{
                                                                return (
                                                                    <Box>{this.state.valueTabs}</Box>
                                                                );
                                                            })
                                                        }
                                                    </Box>
                                                </Typography>
                                            </Paper>
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
}

StageSeat.propTypes = {};

export default StageSeat;
