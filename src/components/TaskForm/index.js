import { Box, Button, Grid, } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators, compose, } from 'redux';
import * as modalActions from '../../actions/modal';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { classes, modalActionsCreator, } = this.props;
    const { hideModal, } = modalActionsCreator;
    return (
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="standard-basic"
              label="Tiêu đề"
              className={classes.textfield}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-textarea"
              label="Mô tả"
              placeholder="Placeholder"
              multiline
              className={classes.textfield}
            />
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" flexDirection="row-reverse">
              <Box ml={1}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={hideModal}
                >
                  Hủy bỏ
                </Button>
              </Box>

              <Button variant="contained" color="primary">
                Lưu lại
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.shape({
    modal: PropTypes.shape.isRequired,
    textfield: PropTypes.shape.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  modalActionsCreator: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskForm);
