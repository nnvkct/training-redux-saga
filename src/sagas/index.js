import {
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { hideModal, } from '../actions/modal';
import {
  addTaskFailed,
  addTaskSuccess,
  deleteTaskFailed,
  deleteTaskSuccess,
  fetchListTask,
  fetchListTaskFailed,
  fetchListTaskSuccess,
  updateTaskFailed,
  updateTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading, } from '../actions/ui';
import { addTask, deleteTask, getList, updateTask, } from '../apis/task';
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
  yield put(showLoading());
  let resp = null;
  try {
    resp = yield call(addTask, {
      title,
      description,
      status: STATUSES[0].value,
    });

    const { data, status, } = resp;
    if (status === STATUS_CODE.CREATED) {
      yield put(addTaskSuccess(data));
    }
    yield put(hideModal());
  } catch (e) {
    yield put(addTaskFailed(e));
  }

  yield delay(1000);
  yield put(hideLoading());
}

function* updateTaskSaga({ payload, }) {
  const { title, description, status, } = payload;
  const taskEditing = yield select((state) => state.task.taskEditing);
  yield put(showLoading());
  let resp = null;
  try {
    resp = yield call(
      updateTask,
      {
        title,
        description,
        status,
      },
      taskEditing.id
    );

    const { data, status: statusCode, } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
      yield put(updateTaskSuccess(data));
      yield put(hideModal());
    }
  } catch (e) {
    yield put(updateTaskFailed(e));
  }

  yield delay(1000);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload, }) {
  const id = payload;
  // const { title, description, status, } = payload;
  // const taskEditing = yield select((state) => state.task.taskEditing);
  yield put(showLoading());
  let resp = null;
  try {
    resp = yield call(deleteTask, id);

    const { status: statusCode, } = resp;
    if (statusCode === STATUS_CODE.SUCCESS) {
      yield put(deleteTaskSuccess(id));
      yield put(hideModal());
    }
  } catch (e) {
    yield put(deleteTaskFailed(e));
  }

  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield takeLatest(taskTypes.FETCH_TASK, watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
