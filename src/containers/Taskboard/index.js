import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/AddAlarm';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators, } from 'redux';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import SearchBox from '../../components/SearchBox';
import TaskForm from '../TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES, } from '../../constants';
import styles from './styles';

class TaskBoard extends Component {
  componentDidMount() {
    const { taskActionCreators, } = this.props;
    const { fetchListTask, } = taskActionCreators;
    fetchListTask();
  }

  openForm = () => {
    const { modalActionCreators, } = this.props;
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm />);
  };

  loadData = () => {
    const { taskActionCreators, } = this.props;
    const { fetchListTask, } = taskActionCreators;
    fetchListTask();
  };

  handleFilter = (e) => {
    const { value, } = e.target;
    const { taskActionCreators, } = this.props;
    const { filterTask, } = taskActionCreators;
    filterTask(value);
  };

  renderSerchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  }

  renderBoard() {
    const { listTask, } = this.props;
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
    const { classes, } = this.props;
    return (
      <div>
        <Box mt={1} ml={1} mr={1}>
          <div className={classes.taskboard}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.loadData}
              style={{ marginRight: 20, }}
            >
              Load Data
            </Button>
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
          {this.renderSerchBox()}
          {this.renderBoard()}
          {/* {this.renderForm()} */}
        </Box>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({ listTask: state.task.listTask, });

TaskBoard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }).isRequired,
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  taskActionCreators: bindActionCreators(taskActions, dispatch),
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

export default withStyles(styles)(
  connect(mapStatetoProps, mapDispatchToProps)(TaskBoard)
);
