import { ThemeProvider, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import theme from '../../commons/Theme';
import configureStore from '../../redux/configureStore';
import Taskboard from '../Taskboard';
import styles from './styles';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
