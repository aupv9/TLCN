import React, { Component,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import '../search-header/style.scss';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import * as LIST from '../../contants';
import * as _ from "lodash";


const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: "#20274D !important",  
      width: '100%',
      height: '90px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent:"",
      width:"70%",
      height:"100%",
      margin:"auto",
      boxShadow:"none",
      backgroundColor:"#20274D"
    },
    input:{
      backgroundColor:"#fff",
      borderRadius:"5px",
      width:"350px"
    },
    gridItem:{
      marginRight:"10px"
    },
    datepicker:{
      backgroundColor:"#fff",
      height:"56px",
      borderRadius:"5px",
      width:"250px",
      borderBottom:"none",
      padding:"5px"
    },
    button:{
      padding:"13px",
      width:"200px",
      backgroundColor:"#5392F9",
      fontWeight:700,
      fontSize:"18px"
    },
    searchContent:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:"center",
      alignContent:"center",
      width:"70%",
    },
    searchContentItem:{
      width:"350px",
      zIndex:"2000",
      marginTop:"-14px",
      display:"none",
    },
    listProvince:{
      overflow:"scroll",
      height:"500px",
      borderRadius:"5px"
    }
   
  }));

const SearchHeader = (props) =>{

    const classes = useStyles();
    
    /* State */
    const [provinces,setProvinces] =useState(LIST.LIST_PROVINCE);
    const [locate,setLocate] =useState("");
    const [selectedDate, setSelectedDate] =useState(new Date('2019-08-18T21:11:54'));
    const [beginLocate,setBeginLocate] =useState("");
    const [endLocate,setEndLocate] =useState("");

    /* Change date */
    const changeDate = date => {
      setSelectedDate(date);
    };
    
    const selectProvince = (event) =>{
      console.log(event);
      // switch (sign) {
      //   case 1:
         
      //     setBeginLocate(event.target.value);
      //     break;
      //   case 2:
      //     setEndLocate(event.target.value);
      //     break;
      //   default:
      //     break;
      // }
    
    };

    /* */
    const handleClickSearch=(sign,event)=>{
      switch (sign) {
        case 1:
          setProvinces(toSearchProvince(locate));
          document.getElementById("list-search-begin").style.display="block";
          break;

        default:
          break;
      }
     
    };
    /*Method change search begin */
    const handleChangeSearch= (sign, event)  =>{
        
        switch (sign) {
          case 1:
            setLocate(event.target.value);
            setProvinces(toSearchProvince(locate));
            document.getElementById("list-search-begin").style.display="block";
            break;
        
          default:
            break;
        }
       
    };
     /*
    * method tìm kiếm thông qua key
    * */
   const toSearchProvince=(location)=>{
      return _.filter(LIST.LIST_PROVINCE,(o)=>{
        return _.includes(o.NAME.toLowerCase(),location.toLowerCase());
    });
}
    /*Method blur search begin */
    const handleBlurSearchBegin= (sign, event) =>{
        switch (sign) {
          case 1:
            document.getElementById("list-search-begin").style.display="none";
            break;
        
          default:
            break;
        }
    };
    return (
        <div className={classes.root}>
        
            <AppBar position="static" 
                   className={classes.container} >
            <Toolbar>
               <Container component="main" >
                  <Grid container 
                        justify="space-around">
                        <Grid item 
                              className={classes.gridItem}
                              >
                            <TextField
                                      className={classes.input}
                                      name="begin-province"
                                      variant="outlined"
                                      type="text"
                                      color="white"
                                      placeholder="Đi từ"
                                      onChange={(e)=>handleChangeSearch(1,e)}
                                      onBlur={(e)=>handleBlurSearchBegin(1,e)}
                                      onClick={(e)=>handleClickSearch(1,e)}
                                      value={beginLocate}
                                />
                            
                        </Grid>
                        <Grid item 
                              className={classes.gridItem}>
                            <TextField
                                      className={classes.input}
                                      variant="outlined"
                                     
                                      name="repassword"
                                      type="text"
                                      id="password"
                                      color="white"
                                      placeholder="Đi đến"
                                      // value={endLocate}
                                      onChange={(e)=>handleChangeSearch(2,e)}
                                      onBlur={(e)=>handleBlurSearchBegin(2,e)}
                                      onClick={(e)=>handleClickSearch(2,e)}
                                />
                            
                        </Grid>
                        <Grid item 
                              className={classes.gridItem}>
                         <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                                      className={classes.datepicker}                                   
                                      variant="inline"
                                      format="MM/dd/yyyy"
                                      borderBottom="none"
                                      id="date-picker-inline"
                                      label="Ngày đi"
                                      value={selectedDate}
                                      onChange={changeDate}
                                      KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                      }}
                                    />
                         </MuiPickersUtilsProvider>
                            
                        </Grid>
                        <Grid item 
                              className={classes.gridItem}>
                             <Button
                                className={classes.button}
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                              >
                                TÌM KIẾM
                              </Button>
                        </Grid>
                  </Grid>
               </Container>
               
            </Toolbar>
            </AppBar>
            <Container component="main">
                <Grid container>
                      <Grid item
                            className={classes.searchContentItem}
                            id="list-search-begin">
                          <Paper >
                               <List component="nav"
                                     className={classes.listProvince}
                                     >
                                    {
                                      provinces.map(province =>{
                                        return (
                                          <ListItem button
                                                    data-id={province.MA}
                                                    data-name={province.NAME}
                                                    onClick={()=>console.log(1)}                                              
                                          >
                                            <ListItemIcon>
                                              <RoomIcon />
                                            </ListItemIcon>
                                            {/* <ListItemText primary={province.NAME} 
                                                          data-id={province.MA}
                                                          onClick={selectProvince}
                                                          /> */}
                                              <span data-id={province.MA}
                                                    data-name={province.NAME}
                                                    onClick={()=>console.log(1)}        
                                              >
                                                    {province.NAME}
                                              </span>
                                          </ListItem>
                                        )  
                                      })

                                    }
                                  
                                </List>
                          </Paper>
                      </Grid>
                      <Grid item>
                        
                      </Grid>
                </Grid>                 
            </Container>
      </div>
    );

}

export default SearchHeader;