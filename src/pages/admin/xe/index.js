import React, { Component } from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink,useHistory,Route ,Switch} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DescriptionIcon from '@material-ui/icons/Description';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../../../components/sidebar';

import homeRoutes from '../../../routes'


const useStyles = makeStyles(theme => ({
   
    sidebar:{
        width:"15%",
        height:"100%"
    },

    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      header:{

            }


  }));
const Xe = ()=> {
    const classes = useStyles();

        return (
            <div>
                 <Grid container  spacing={2}>
                    <Grid item xs={2}>
                    <Sidebar />
                    </Grid>
                    <Grid item xs={10}>
                        Xe
                    </Grid>
                </Grid>
                
            </div>
        );
    
}

export default Xe;