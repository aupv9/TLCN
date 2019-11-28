import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: "#3F51B5 !important",  
      width: '100%',
      height: '100px'
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
    },
    input:{
      backgroundColor:"#fff"
    },
    gridItem:{
      marginRight:"10px"
    }
   
  }));

const SearchHeader = (props) =>{

    const classes = useStyles();

  
    return (
        <div className={classes.root}>
        
            <AppBar position="static" 
                   className={classes.container} >
            <Toolbar>
               <Container component="main" >
                  <Grid container >
                        <Grid item 
                              className={classes.gridItem}
                              >
                            <TextField
                                      className={classes.input}
                                      variant="outlined"
                                      required
                                      fullWidth
                                      name="repassword"
                                      type="text"
                                      id="password"
                                      color="white"

                                />
                        </Grid>
                        <Grid item 
                              className={classes.gridItem}>
                            <TextField
                                      className={classes.input}
                                      variant="outlined"
                                      required
                                      fullWidth
                                      name="repassword"
                                      type="text"
                                      id="password"
                                      color="white"

                                />
                        </Grid>
                  </Grid>
               </Container>
               
            </Toolbar>
            </AppBar>
      </div>
    );

}

export default SearchHeader;