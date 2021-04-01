import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const renderFromHelper = ({ touched, error, }) => {
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText>{touched && error}</FormHelperText>;
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error, },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      native
      /* eslint-disable react/jsx-props-no-spreading */
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'color-native-simple',
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error, })}
  </FormControl>
);

renderSelectField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape.isRequired,
  meta: PropTypes.shape.isRequired,
};

export default renderSelectField;
