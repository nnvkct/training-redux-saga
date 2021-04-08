import { ThemeProvider, withStyles, } from '@material-ui/core';
import React, { Component, } from 'react';
import { Provider, } from 'react-redux';
import { BrowserRouter, Switch, } from 'react-router-dom';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';
import theme from '../../commons/Theme';
import CommonModal from '../../components/CommonModal';
import GlobalLoading from '../../components/GlobalLoading';
import { ADMIN_ROUTES, } from '../../constants/routes';
import configureStore from '../../redux/configureStore';
import styles from './styles';

const store = configureStore();

class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => (
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
            <CssBaseline />
            <Switch>{this.renderAdminRoutes()}</Switch>
            <CommonModal />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
