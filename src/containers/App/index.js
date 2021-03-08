import { ThemeProvider, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import theme from '../../commons/Theme';
import Taskboard from '../Taskboard/index.js';
import styles from './styles.js';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
