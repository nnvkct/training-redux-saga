import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

export const fetchListTaskSuccess = (data) => ({
  type: taskConstants.FETCH_TASK_SUCESS,
  payload: {
    data
  }
});

export const fetchListTaskFailed = (error) => ({
  type: taskConstants.FETCH_TASK_FAILED,
  payload: {
    error
  }
});

export const fetchListTask = () => ({ type: taskConstants.FETCH_TASK });

export const fetchListTaskRequest = () => (dispatch) => {
  dispatch(fetchListTask());
  taskApis
    .getList()
    .then((response) => {
      const { data } = response;
      dispatch(fetchListTaskSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchListTaskFailed(error));
    });
};
