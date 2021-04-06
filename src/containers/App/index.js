import { ThemeProvider, withStyles, } from '@material-ui/core';
import React, { Component, } from 'react';
import { Provider, } from 'react-redux';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import theme from '../../commons/Theme';
import CommonModal from '../../components/CommonModal';
import GlobalLoading from '../../components/GlobalLoading';
import configureStore from '../../redux/configureStore';
import Taskboard from '../Taskboard';
import styles from './styles';
import { ADMIN_ROUTES, } from '../../constants/routes';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';

const store = configureStore();

class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route, index) => (
      <AdminLayoutRoute
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        name={route.name}
      />
    ));
    return xhtml;
  }

  render() {
    console.warn = () => {}; // Disable warnings in console
    console.error = () => {}; // Disable errors in console

    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            <GlobalLoading />
            <Switch>{this.renderAdminRoutes()}</Switch>
            <CommonModal />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
