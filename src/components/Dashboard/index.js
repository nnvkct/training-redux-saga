import { Toolbar, } from '@material-ui/core';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { compose, bindActionCreators, } from 'redux';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './styles';
import * as uiActions from '../../actions/ui';

class Dashboard extends Component {
  handleToggleSidebar = value => {
    const { uiActionsCreator, } = this.props;
    const { showSidebar, hideSidebar, } = uiActionsCreator;
    if (value) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };

  render() {
    const { children, classes, name, showSidebar, } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header name={name} onToggleSidebar={this.handleToggleSidebar} />
        <div className={classes.wrapper}>
          <div className={classes.wrapperSidebar}>
            <Sidebar showSidebar={showSidebar} />
          </div>
          <div className={classes.wrapperContent}>
            <Toolbar />
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.shape.isRequired,
  children: PropTypes.shape.isRequired,
  name: PropTypes.string.isRequired,
  showSidebar: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  showSidebar: state.ui.showSidebar,
});

const mapDispatchToProps = dispatch => ({
  uiActionsCreator: bindActionCreators(uiActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
