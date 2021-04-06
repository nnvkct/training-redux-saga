import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/AddAlarm';
import { withStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import uuid from 'react-uuid';
import { bindActionCreators, } from 'redux';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import SearchBox from '../../components/SearchBox';
import TaskList from '../../components/TaskList';
import { STATUSES, } from '../../constants';
import TaskForm from '../TaskForm';
import styles from './styles';

class TaskBoard extends Component {
  componentDidMount() {
    const { taskActionCreators, } = this.props;
    const { fetchListTask, } = taskActionCreators;
    fetchListTask();
  }

  handleFilter = (e) => {
    const { value, } = e.target;
    const { taskActionCreators, } = this.props;
    const { filterTask, } = taskActionCreators;
    filterTask(value);
  };

  handleEditTask = (task) => {
    const { taskActionCreators, modalActionCreators, } = this.props;
    const { setTaskEditing, } = taskActionCreators;
    setTaskEditing(task);

    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle('Cập nhật công việc');
    changeModalContent(<TaskForm />);
  };

  handleDeleteTask(task) {
    const { taskActionCreators, } = this.props;
    const { deleteTask, } = taskActionCreators;
    deleteTask(task.id);
  }

  showModalDeleteTask = (task) => {
    const { modalActionCreators, classes, } = this.props;

    const {
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    showModal();
    changeModalTitle('Xóa công việc');
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa công việc{' '}
          <span className={classes.modalConfirmTextBold}>{task.title}</span> ?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>
              Hủy bỏ
            </Button>
          </Box>
          <Box ml={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleDeleteTask(task)}
            >
              Đồng ý
            </Button>
          </Box>
        </Box>
      </div>
    );
  };

  loadData = () => {
    const { taskActionCreators, } = this.props;
    const { fetchListTask, } = taskActionCreators;
    fetchListTask();
  };

  openForm = () => {
    const { modalActionCreators, taskActionCreators, } = this.props;
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreators;
    const { setTaskEditing, } = taskActionCreators;
    setTaskEditing(null);
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm />);
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
        {STATUSES.map((status) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList
              tasks={taskFilter}
              status={status}
              key={uuid()}
              onClickEdit={this.handleEditTask}
              onClickDelete={this.showModalDeleteTask}
            />
          );
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
  classes: PropTypes.shape({
    taskboard: PropTypes.shape.isRequired,
    button: PropTypes.shape.isRequired,
  }).isRequired,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
    setTaskEditing: PropTypes.func,
    deleteTask: PropTypes.func,
  }).isRequired,
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }).isRequired,
  listTask: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  taskActionCreators: bindActionCreators(taskActions, dispatch),
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

export default withStyles(styles)(
  connect(mapStatetoProps, mapDispatchToProps)(TaskBoard)
);
