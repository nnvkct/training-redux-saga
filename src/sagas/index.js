import {
  call,
  delay,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import {
  addTaskFailed,
  addTaskSuccess,
  fetchListTask,
  fetchListTaskFailed,
  fetchListTaskSuccess,
  filterTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading, } from '../actions/ui';
import { addTask, getList, } from '../apis/task';
import { STATUS_CODE, STATUSES, } from '../constants';
import * as taskTypes from '../constants/task';

function* watchFetchListTaskAction() {
  yield put(showLoading());
  try {
    const resp = yield call(getList);
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
