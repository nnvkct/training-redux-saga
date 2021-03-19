import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import LoadingIcon from '../../assets/images/loading.gif';
import * as uiAction from '../../actions/ui';

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }

    return xhtml;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.shape({
    globalLoading: PropTypes.shape({}).isRequired,
    icon: PropTypes.shape({}).isRequired,
  }).isRequired,
  showLoading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  showLoading: state.ui.showLoading,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
