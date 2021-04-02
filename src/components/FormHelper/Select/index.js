import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, } from '@material-ui/styles';
import styles from './styles';

const renderFromHelper = ({ touched, error, }) => {
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText>{touched && error}</FormHelperText>;
};

const renderSelectField = ({
  classes,
  input,
  label,
  meta: { touched, error, },
  children,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      /* eslint-disable react/jsx-props-no-spreading */
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'color-native-simple',
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error, })}
  </FormControl>
);

renderSelectField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(renderSelectField);
