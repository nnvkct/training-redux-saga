import { call, fork, take, put, delay, takeLatest } from 'redux-saga/effects';
import { getList } from '../apis/task';
import * as taskTypes from '../constants/task';
import { STATUS_CODE } from '../constants';
import { fetchListTaskFailed, fetchListTaskSuccess } from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchCreateTaskAction() {
  console.log('watching create task action');
}

function* filterTaskSaga({ payload }) {
  console.log('fitler task saga running', payload);
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
