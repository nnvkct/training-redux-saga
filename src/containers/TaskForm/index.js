import { Box, Button, Grid, } from '@material-ui/core';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators, compose, } from 'redux';
import { Field, reduxForm, } from 'redux-form';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import renderSelectField from '../../components/FormHelper/Select';
import renderTextField from '../../components/FormHelper/TextField';
import styles from './styles';
import validate from './validate';

class TaskForm extends Component {
  componentDidMount() {
    const { taskEditing, initialize, } = this.props;

    if (taskEditing) {
      initialize(taskEditing);
    }
  }

  handleSumbitForm = (data) => {
    const { taskActionsCreator, } = this.props;
    const { addTask, } = taskActionsCreator;
    const { title, description, } = data;
    addTask(title, description);
  };

  renderStatusSelection() {
    const { taskEditing, } = this.props;
    let xhtml = null;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id="status"
          name="status"
          component={renderSelectField}
          label="Trạng thái"
        >
          <option value={0}>Ready</option>
          <option value={1}>In progress</option>
          <option value={2}>Completed</option>
        </Field>
      );
    }
    return xhtml;
  }

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
              // inputProps={{ style: { fontSize: 20, }, }} // font size of input text
              // InputLabelProps={{ style: { fontSize: 20, }, }}
              InputProps={{
                classes: {
                  input: classes.resize1,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.resize1,
                },
              }}
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
              InputProps={{
                classes: {
                  input: classes.resize2,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.resize2,
                },
              }}
              multiline
              rowsMax="4"
              className={classes.textfield}
              margin="normal"
              name="description"
              component={renderTextField}
            />
          </Grid>

          {this.renderStatusSelection()}

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
    select: PropTypes.shape.isRequired,
    resize1: PropTypes.shape.isRequired,
    resize2: PropTypes.shape.isRequired,
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
  initialize: PropTypes.func.isRequired,
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
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
