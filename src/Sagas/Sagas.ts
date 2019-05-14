import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  actions,
  fetchSuccess,
  fetchFailure,
  createSuccess,
  fetchRequest,
  createFailure,
  updateSuccess,
  updateFailure,
  updatePriority,
  reorderSuccess,
  reorderFailure,
  reorderList,
  archiveSuccess,
  archiveFailure,
  restoreSuccess,
  restoreFailure,
} from 'Actions';
import { getRequest, postRequest, putRequest, validate } from 'Utils';
import priority from './priority.json';

function* watchFetch() {
  yield takeLatest(actions.FETCH_REQUEST, onFetchRequest);
}

function* onFetchRequest() {
  try {
    // const data = yield call(getRequest, { url: '/api/Priorities' });
    const data = priority;

    yield put(fetchSuccess(data));
  } catch ({ message }) {
    yield put(fetchFailure(message));
  }
}

function* watchCreate() {
  yield takeLatest(actions.CREATE_REQUEST, onCreateRequest);
}

function* onCreateRequest(action) {
  const { payload, meta } = action;
  const { setIsEdit, setIsSubmitting } = meta;

  try {
    yield call(setIsSubmitting, true);

    if (Object.keys(payload).length === 0) {
      return;
    }

    yield call(validate, payload);

    /* const data = yield call(postRequest, {
      url: '/api/Priorities',
      data: payload
    }); */

    // yield put(createSuccess(data));
    // yield put(fetchRequest());
  } catch ({ message }) {
    yield put(createFailure(message));
  } finally {
    yield call(setIsSubmitting, false);
    yield call(setIsEdit, false);
  }
}

function* watchUpdate() {
  yield takeLatest(actions.UPDATE_REQUEST, onUpdateRequest);
}

function* onUpdateRequest(action) {
  const { payload, meta } = action;
  const { setIsEdit, setIsSubmitting } = meta;

  try {
    yield call(setIsSubmitting, true);

    if (Object.keys(payload).length === 0) {
      return;
    }

    yield call(validate, payload);

    yield put(updatePriority(payload));

    /* const data = yield call(putRequest, {
      url: '/api/Priorities',
      data: payload
    }); */

    // yield put(updateSuccess(data));
    // yield put(fetchRequest());
  } catch ({ message }) {
    yield put(updateFailure(message));
  } finally {
    yield call(setIsSubmitting, false);
    yield call(setIsEdit, false);
  }
}

function* watchReorder() {
  yield takeLatest(actions.REORDER_REQUEST, onReorderRequest);
}

function* onReorderRequest(action) {
  const { startIndex, endIndex, parentIndex } = action.payload;

  try {
    yield put(reorderList({ startIndex, endIndex, parentIndex }));

    /* const data = yield call(putRequest, {
      url: `/api/Priorities/${id}/ChangeOrder/${endIndex}`
    }); */

    // yield put(reorderSuccess(data));
  } catch ({ message }) {
    yield put(reorderFailure(message));
  }
}

function* watchArchive() {
  yield takeLatest(actions.ARCHIVE_REQUEST, onArchiveRequest);
}

function* onArchiveRequest(action) {
  const { id } = action.payload;

  try {
    /* yield call(putRequest, {
      url: `/api/Priorities/${id}/Archive`
    }); */
    // yield put(archiveSuccess());
    // yield put(fetchRequest());
  } catch ({ message }) {
    yield put(archiveFailure(message));
  }
}

function* watchRestore() {
  yield takeLatest(actions.RESTORE_REQUEST, onRestoreRequest);
}

function* onRestoreRequest(action) {
  const { id } = action.payload;

  try {
    /* yield call(putRequest, {
      url: `/api/Priorities/${id}/Restore`
    }); */
    // yield put(restoreSuccess());
    // yield put(fetchRequest());
  } catch ({ message }) {
    yield put(restoreFailure(message));
  }
}

function* watchPriority() {
  yield all([
    watchFetch(),
    watchCreate(),
    watchUpdate(),
    watchReorder(),
    watchArchive(),
    watchRestore(),
  ]);
}

export { watchPriority };
