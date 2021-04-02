import { TextField, } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

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
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default renderTextField;
