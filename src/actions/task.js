import * as taskConstants from '../constants/task';

export const fetchListTaskSuccess = (data) => ({
  type: taskConstants.FETCH_TASK_SUCESS,
  payload: {
    data,
  },
});

export const fetchListTaskFailed = (error) => ({
  type: taskConstants.FETCH_TASK_FAILED,
  payload: {
    error,
  },
});

export const fetchListTask = (params = {}) => ({
  type: taskConstants.FETCH_TASK,
  payload: { params, },
});

export const filterTask = (keyword) => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword,
  },
});

export const filterTaskSuccess = (data) => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTaskSuccess = (data) => ({
  type: taskConstants.ADD_TASK_SUCESS,
  payload: {
    data,
  },
});

export const addTaskFailed = (error) => ({
  type: taskConstants.ADD_TASK_FAILED,
  payload: {
    error,
  },
});

export const addTask = (title, description) => ({
  type: taskConstants.ADD_TASK,
  payload: { title, description, },
});

export const setTaskEditing = (task) => ({
  type: taskConstants.SET_TASK_EDITING,
  payload: { task, },
});

export const updateTaskSuccess = (data) => ({
  type: taskConstants.UPDATE_TASK_SUCESS,
  payload: {
    data,
  },
});

export const updateTaskFailed = (error) => ({
  type: taskConstants.UPDATE_TASK_FAILED,
  payload: {
    error,
  },
});

export const updateTask = (title, description) => ({
  type: taskConstants.UPDATE_TASK,
  payload: { title, description, },
});
