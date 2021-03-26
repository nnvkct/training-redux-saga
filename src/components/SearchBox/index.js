import { TextField, } from '@material-ui/core';
import { withStyles, } from '@material-ui/styles';
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class SearchBox extends Component {
  render() {
    const { classes, handleChange, } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            className={classes.textField}
            onChange={handleChange}
            margin="normal"
            placeholder="Nhập từ khóa"
          />
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchBox);
