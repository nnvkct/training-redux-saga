import { fork, take } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';

function* watchFetchListTaskAction() {
  yield take(taskTypes.FETCH_TASK);
  console.log('watching fetch list task action');
}

function* watchCreateTaskAction() {
  console.log('watching create task action');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
