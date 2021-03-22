import * as taskApis from '../apis/task';
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

export const fetchListTask = () => ({ type: taskConstants.FETCH_TASK });

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
