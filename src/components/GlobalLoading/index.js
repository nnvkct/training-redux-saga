import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import LoadingIcon from '../../assets/images/loading.gif';

class GlobalLoading extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.globalLoading}>
        <img src={LoadingIcon} alt="loading" className={classes.icon} />
      </div>
    );
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.shape({
    globalLoading: PropTypes.shape({}).isRequired,
    icon: PropTypes.shape({}).isRequired
  }).isRequired
};
export default withStyles(styles)(GlobalLoading);
