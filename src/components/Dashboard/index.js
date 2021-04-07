import React, { Component, } from 'react';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';

class Dashboard extends Component {
  render() {
    const { children, classes, name, } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header name={name} />
        <Sidebar />
        {children}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.shape.isRequired,
  children: PropTypes.shape.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(Dashboard);
