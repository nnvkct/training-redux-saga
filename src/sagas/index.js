import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import {
  fetchListTask,
  fetchListTaskFailed,
  fetchListTaskSuccess,
  filterTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading } from '../actions/ui';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants';
import * as taskTypes from '../constants/task';

function* watchFetchListTaskAction() {
  yield put(showLoading());
  let resp = null;
  try {
    resp = yield call(getList);
  } catch (error) {
    console.log('resp1: ', { ...error });
    resp = { ...error }.response;
    console.log('resp2: ', resp);
  }
  // const resp = yield call(getList);  : "Not Found"
  const { status, data, statusText } = resp;
  // console.log('======================================================: ');
  console.log('status: ', status);
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListTaskSuccess(data));
  } else {
    yield put(fetchListTaskFailed(statusText));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;

  if (keyword === '') {
    yield put(fetchListTask());
  } else {
    const list = yield select((state) => state.task.listTask);
    const filterTask = list.filter((task) =>
      task.title.trim().toLowerCase().includes(keyword.trim())
    );
    yield put(filterTaskSuccess(filterTask));
  }
}

function* rootSaga() {
  yield takeLatest(taskTypes.FETCH_TASK, watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
