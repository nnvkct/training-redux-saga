import { call, delay, put, takeEvery, takeLatest, } from 'redux-saga/effects';
import {
  addTaskFailed,
  addTaskSuccess,
  fetchListTask,
  fetchListTaskFailed,
  fetchListTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading, } from '../actions/ui';
import { addTask, getList, } from '../apis/task';
import { STATUSES, STATUS_CODE, } from '../constants';
import * as taskTypes from '../constants/task';

function* watchFetchListTaskAction(action) {
  yield put(showLoading());
  const { params, } = action.payload;
  try {
    const resp = yield call(getList, params);
    const { status, data, } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    }
  } catch (e) {
    yield put(fetchListTaskFailed(e));
  }

  yield delay(1000);
  yield put(hideLoading());
}

function* filterTaskSaga({ payload, }) {
  yield delay(500);
  const { keyword, } = payload;
  yield put(
    fetchListTask({
      q: keyword,
    })
  );
}

function* addTaskSaga({ payload, }) {
  const { title, description, } = payload;
  yield put(showLoading);
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });

  const { data, status, } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
  } else {
    put(addTaskFailed(data));
  }

  yield put(hideLoading);
}

function* rootSaga() {
  yield takeLatest(taskTypes.FETCH_TASK, watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}

export default rootSaga;
