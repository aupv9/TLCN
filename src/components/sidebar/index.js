/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import routes from '../../routes.js';
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
// core components


const useStyles = makeStyles({
   
   
});




export default function Sidebar(props) {
  const classes = useStyles();
  


  return (
    <div>
                       <List component="nav" 
                          className={classes.sidebar}
                          >
                        
                        <NavLink to="/admin">
                            <ListItem button>   
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                            <ListItemText primary="DashBoard" />
                            </ListItem>
                        </NavLink>
                        <NavLink to="/admin/user">
                            <ListItem button>   
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                            <ListItemText primary="Người dùng" />
                            </ListItem>
                        </NavLink>
                        <NavLink to="/admin/xe">
                            <ListItem button>   
                                <ListItemIcon>
                                    <AirportShuttleIcon />
                                </ListItemIcon>
                            <ListItemText primary="Xe" />
                            </ListItem>
                        </NavLink>
                        <NavLink to="/admin/ve">
                            <ListItem button>   
                                <ListItemIcon>
                                    <LibraryBooks />
                                </ListItemIcon>
                            <ListItemText primary="Vé" />
                            </ListItem>
                        </NavLink>
                    </List>
    </div>
  );
}

Sidebar.propTypes = {
  
};
