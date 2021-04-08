import { Toolbar, } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, } from 'react-router-dom';
import { ADMIN_ROUTES, } from '../../../constants/routes';
import styles from './styles';

function Sidebar(props) {
  const { classes, showSidebar, } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        open={showSidebar}
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {ADMIN_ROUTES.map(item => (
              <NavLink
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
                key={item.path}
              >
                <ListItem button key={item.path}>
                  <ListItemText primary={item.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.shape.isRequired,
  showSidebar: PropTypes.bool.isRequired,
};
export default withStyles(styles)(Sidebar);
