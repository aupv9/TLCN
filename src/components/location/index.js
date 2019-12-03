import React, { Component,useState } from 'react';
import {
    makeStyles,
    Paper,  
    Container,
    Grid, 
    FormControl,
    FormLabel,RadioGroup,FormControlLabel,Radio,Typography
} from "@material-ui/core";
import classnames from "classnames";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import {connect} from "react-redux";
import {setStartLocation, setEndLocation} from '../../redux/action/user';


/*Style reactstrap*/
const useStyleBootstrap={
    marginTop:"10px"
}
const btnNext={
    marginTop:"10px",
    marginBottom:"10px",
    width:"300px",
    padding:"10px"

}
const inputStyle={
    width: "550px"
}
const useStyles = makeStyles(theme => ({
    container:{
        width: "100%",
        paddingLeft:"0px",paddingRight:"0px",
        marginLeft:"10px",marginRight:"10px",
    },
    content:{
        height: "535px"
    }
  }));
  
const Location = (props)=> {
    const { lichTrinh,start,end}=props;
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState('1');

     /*Xử Lý trước khi gán cho radio*/
     const [listAddressStart,setListAddressStart]=React.useState([]);
     const [listAddressEnd,setListAddressEnd]=React.useState([]);

    
    /*Set value điểm đi*/
    const changeStart= event =>{
        props.setLocateStart(event.target.value);
    }
    /*Set value điểm đến*/
    const changeEnd = event =>{
        props.setLocateEnd(event.target.value);
    }
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
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  
    return (
       <Container component="main" maxWidth="md"
                  className={classes.container}>
             <Grid container  spacing={2}>
                <Grid item xs={12}> 
                    <Paper className={classes.content}>
                        <Typography style={{fontWeight:"500",fontSize:"20px",
                          paddingLeft:"15px",paddingTop:"20px"}}>
                          CHỌN NƠI ĐI VÀ NƠI ĐẾN
                       </Typography>
                        <Nav tabs
                            style={{marginLeft:"10px",marginTop:"20px"}}>
                            <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Điểm Đi
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
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
                            </TabContent>
                    </Paper>
                </Grid>
            </Grid>
       </Container>     
    );
    
}


const mapStateToProps =(state)=>({
    
});

const mapDispatchToProps =(dispatch)=>({
    setLocateStart:(location)=>{
        dispatch(setStartLocation(location))
    },
    setLocateEnd:(location)=>{
        dispatch(setEndLocation(location))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Location);