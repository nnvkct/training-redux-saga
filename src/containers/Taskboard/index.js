import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/AddAlarm';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants';
import styles from './styles';

class TaskBoard extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTaskRequest } = taskActionCreators;
    fetchListTaskRequest();
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  openForm = () => {
    this.setState({
      open: true
    });
  };

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value
          );
          return <TaskList tasks={taskFilter} status={status} key={index} />;
        })}
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Box mt={1}>
          <div className={classes.taskboard}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={this.openForm}
            >
              Thêm mới công việc
            </Button>
          </div>
          {this.renderBoard()}
          {this.renderForm()}
        </Box>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({ listTask: state.task.listTask });

TaskBoard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  taskActionCreators: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func
  }).isRequired
  // listTask: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  taskActionCreators: bindActionCreators(taskActions, dispatch)
});

export default withStyles(styles)(
  connect(mapStatetoProps, mapDispatchToProps)(TaskBoard)
);
