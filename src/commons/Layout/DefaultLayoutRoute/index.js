import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { Route, } from 'react-router-dom';
import styles from './styles';

class DefaultLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;

    return (
      <Route
        /* eslint-disable react/jsx-props-no-spreading */
        {...remainProps}
        render={routeProps => <YourComponent {...routeProps} />}
      />
    );
  }
}

DefaultLayoutRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  component: PropTypes.shape.isRequired,
};

export default withStyles(styles)(DefaultLayoutRoute);
