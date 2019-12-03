import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Button
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
      height: 435,
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
                            
                                {/*<Box style={{position:"absolute",bottom:"65%",left:"25px"}}>*/}
                                {/*    <img width="25"*/}
                                {/*         className="img-responsive wheel-img"*/}
                                {/*         src="https://storage.googleapis.com/fe-production/images/Route/steering-wheel.svg"/>*/}
                                {/*</Box>*/}
                                {/*Render danh sách ghế*/}
                                <GridList cellHeight={100} 
                                          cellWidth={100}
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
