import { Box, Button, Grid, } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators, compose, } from 'redux';
import { Field, reduxForm, } from 'redux-form';
import * as modalActions from '../../actions/modal';
import renderTextField from '../../components/FormHelper/TextField';
import styles from './styles';

class TaskForm extends Component {
  handleSumbitForm = (data) => {
    console.log('data: ', data);
  };

  render() {
    const { classes, modalActionsCreator, handleSubmit, } = this.props;
    const { hideModal, } = modalActionsCreator;
    return (
      <form onSubmit={handleSubmit(this.handleSumbitForm)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <TextField
              id="standard-basic"
              label="Tiêu đề"
              className={classes.textfield}
            /> */}

            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textfield}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <TextField
              id="standard-textarea"
              label="Mô tả"
              placeholder="Placeholder"
              multiline
              className={classes.textfield}
            /> */}
            <Field
              id="description"
              label="Mô tả"
              multiline
              rowsMax="4"
              className={classes.textfield}
              margin="normal"
              name="description"
              component={renderTextField}
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

              <Button variant="contained" color="primary" type="submit">
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
  handleSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  modalActionsCreator: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
  // a unique name for the form
  form: FORM_NAME,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
