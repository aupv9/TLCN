import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Button,
    Container
} from "@material-ui/core";
import {Col} from "reactstrap";
import Seat from "../seat";
import {connect} from "react-redux";
import classnames from "classnames";
import CloseIcon from '@material-ui/icons/Close';
import {putNull} from "../../redux/action/car";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


/*Style reactstrap*/

const useStyles = makeStyles(theme => ({
    gridList: {
      width: 300,
      height: 400,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
const StageSeat =(props)=> {

    /*Map props*/
    const {arrSeat,start}=props;

    /*State activeTab*/
    const [activeTab,setActiveTabs]=React.useState('1');

    /*Lifecyle*/
    React.useEffect(()=>{
        //handleListStart();
    },[]);

    /*Method select tab*/
    const  toggle = tab => {
        if (activeTab !== tab) {
            setActiveTabs(tab);
        }
    }

    const classes = useStyles();
        return (
            <>
                <Col md="12"
                    style={{marginLeft:"0",paddingRight:"0px"}}>
                    <Paper  style={{padding:"0"}}>
                         {/* <Button className={classes.button}
                                onClick={()=>toggleCarByIcon()}
                        ><CloseIcon onClick={()=>toggleCarByIcon()}/></Button>  */}
                        {/*Start header intro seat*/}
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">
                                        <Paper style={{width:"30px", height:"10px",backgroundColor:"#757575"}}></Paper>Ghế Trống
                                    </TableCell>
                                    <TableCell align="left">
                                        <Paper style={{width:"30px", height:"10px",backgroundColor:"#BDBDBD"}}></Paper>
                                        Ghế Đã Đặt
                                    </TableCell>
                                    <TableCell align="left">
                                        <Paper style={{width:"30px", height:"10px",backgroundColor:"#3F51B5"}}></Paper>
                                        Ghế Đang Đặt
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        {/*    End header seat*/}
                        <Paper style={{padding:"10PX",
                                borderBottomLeftRadius:"0",
                                textAlign:"center",height:"472px"}}>
                            
                            {/* <GridList cellHeight={40} 
                                          cellWidth={40}
                                          className={classes.gridList}
                                          cols={4}
                                          >
                                <Table className={classes.table} aria-label="simple table">
                               <TableBody>
                                    <TableRow>
                                        <TableCell size="small">
                                            
                                        </TableCell>
                                        <TableCell size="small">
                                            <Seat seat={arrSeat[1]} />
                                        </TableCell>
                                        <TableCell size="small">
                                            <Seat seat={arrSeat[4]} />
                                        </TableCell>
                                        <TableCell size="small">
                                            <Seat seat={arrSeat[7]} />
                                        </TableCell>
                                        <TableCell size="small">
                                            <Seat seat={arrSeat[10]} />
                                        </TableCell>
                                        <TableCell size="small">
                                            <Seat seat={arrSeat[12]} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                            <TableCell>
                                            <img width="20" class="img-responsive wheel-img" src="https://storage.googleapis.com/fe-production/images/Route/steering-wheel.svg"></img>
                                            </TableCell>
                                        </TableRow>
                                    <TableRow>
                                        <TableCell>
                                        <img width="20" class="img-responsive wheel-img" src="https://storage.googleapis.com/fe-production/images/Route/steering-wheel.svg"></img>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                        <img width="20" class="img-responsive wheel-img" src="https://storage.googleapis.com/fe-production/images/Route/steering-wheel.svg"></img>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                                </GridList>  */}
                           
                                {/*Render danh sách ghế*/}
                                <GridList cellHeight={50} 
                                          cellWidth={50}
                                          className={classes.gridList}
                                          cols={4}
                                          spacing={3}>
                                {        
                                    arrSeat.map((item,index)=>

                                        <GridListTile key={index}>
                                            <Seat seat={item} />
                                        </GridListTile>
                                    )
                                }
                                </GridList>
                                <Container component="main" style={{textAlign:"right"}}>
                                    <img width="20" class="img-responsive wheel-img" src="https://storage.googleapis.com/fe-production/images/Route/steering-wheel.svg"></img>
                                </Container>

                        </Paper>
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
export default connect(mapStateToProps, {putNull})(StageSeat);
