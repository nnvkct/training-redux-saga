import { TextField, } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, } from '@material-ui/styles';
import styles from './styles';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error, },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    /* eslint-disable react/jsx-props-no-spreading */
    {...input}
    {...custom}
  />
);

renderTextField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(renderTextField);
