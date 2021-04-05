import { Box, Grid, } from '@material-ui/core';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import uuid from 'react-uuid';
import TaskItem from '../TaskItem';
import styles from './styles';

class TaskList extends Component {
  render() {
    const { classes, tasks, status, onClickEdit, onClickDelete, } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={1} mb={1} key={uuid()}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => (
            <Box mb={2} key={uuid()}>
              <TaskItem
                task={task}
                key={uuid()}
                status={status}
                onClickEdit={() => onClickEdit(task)}
                onClickDelete={() => onClickDelete(task)}
              />
            </Box>
          ))}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.shape({
    status: PropTypes.shape.isRequired,
    wrapperListTask: PropTypes.shape.isRequired,
  }).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape).isRequired,
  status: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskList);
