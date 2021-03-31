import { Box, Button, Grid, } from '@material-ui/core';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators, compose, } from 'redux';
import { Field, reduxForm, } from 'redux-form';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import renderTextField from '../../components/FormHelper/TextField';
import styles from './styles';
import validate from './validate';

class TaskForm extends Component {
  componentDidMount() {
    const { dispatch, taskEditing, } = this.props;
    if (dispatch && taskEditing) {
      dispatch({
        type: '@@redux-form/CHANGE',
        meta: { form: 'TASK_MANAGEMENT', field: 'title', },
        payload: taskEditing.title,
      });
      dispatch({
        type: '@@redux-form/CHANGE',
        meta: { form: 'TASK_MANAGEMENT', field: 'description', },
        payload: taskEditing.description,
      });
    }
  }

  handleSumbitForm = (data) => {
    const { taskActionsCreator, } = this.props;
    const { addTask, } = taskActionsCreator;
    const { title, description, } = data;
    addTask(title, description);
  };

  render() {
    const {
      classes,
      modalActionsCreator,
      handleSubmit,
      invalid,
      submmitting,
    } = this.props;

    const { hideModal, } = modalActionsCreator;
    return (
      <form onSubmit={handleSubmit(this.handleSumbitForm)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
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

              <Button
                disabled={invalid || submmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
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
  modalActionsCreator: PropTypes.shape({
    hideModal: PropTypes.func.isRequired,
  }).isRequired,
  taskActionsCreator: PropTypes.shape({
    addTask: PropTypes.func.isRequired,
  }).isRequired,
  invalid: PropTypes.bool.isRequired,
  submmitting: PropTypes.bool,
  taskEditing: PropTypes.shape.isRequired,
};

TaskForm.defaultProps = {
  submmitting: null,
};
const mapStateToProps = (state) => ({
  taskEditing: state.task.taskEditing,
});
const mapDispatchToProps = (dispatch) => ({
  modalActionsCreator: bindActionCreators(modalActions, dispatch),
  taskActionsCreator: bindActionCreators(taskActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
  // a unique name for the form
  form: FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
