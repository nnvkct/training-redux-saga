import React, { Component, } from 'react';
import { withStyles, } from '@material-ui/styles';
import styles from './styles';

class AdminHomePage extends Component {
  render() {
    return (
      <div>
        <h1>AdminHomePage</h1>
      </div>
    );
  }
}

export default withStyles(styles)(AdminHomePage);
