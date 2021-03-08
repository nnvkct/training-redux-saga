import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/AddAlarm';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants';
import styles from './styles';

const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play football',
    description: 'with my friend',
    status: 2,
  },
  {
    id: 3,
    title: 'Play game',
    description: '',
    status: 1,
  },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  renderBoard() {
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

export default withStyles(styles)(TaskBoard);
