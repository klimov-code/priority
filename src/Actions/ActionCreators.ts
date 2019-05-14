import { IPriority, IMeta } from 'Definitions';
import { actions } from 'Actions';

const fetchRequest = () => ({
  type: actions.FETCH_REQUEST,
});

const fetchSuccess = (payload: any) => ({
  type: actions.FETCH_SUCCESS,
  payload,
});

const fetchFailure = (error: any) => ({
  type: actions.FETCH_FAILURE,
  error,
});

const createRequest = (payload: IPriority, meta: IMeta) => ({
  type: actions.CREATE_REQUEST,
  payload,
  meta,
});

const createSuccess = (payload: any) => ({
  type: actions.CREATE_SUCCESS,
  payload,
});

const createFailure = (error: any) => ({
  type: actions.CREATE_FAILURE,
  error,
});

const updateRequest = (payload: IPriority, meta: IMeta) => ({
  type: actions.UPDATE_REQUEST,
  payload,
  meta,
});

const updateSuccess = (payload: any) => ({
  type: actions.UPDATE_SUCCESS,
  payload,
});

const updateFailure = (error: any) => ({
  type: actions.UPDATE_FAILURE,
  error,
});

const updatePriority = (payload: any) => ({
  type: actions.UPDATE_PRIORITY,
  payload,
});

const reorderRequest = (payload: any) => ({
  type: actions.REORDER_REQUEST,
  payload,
});

const reorderSuccess = (payload: any) => ({
  type: actions.REORDER_SUCCESS,
  payload,
});

const reorderFailure = (error: any) => ({
  type: actions.REORDER_FAILURE,
  error,
});

const reorderList = (payload: any) => ({
  type: actions.REORDER_LIST,
  payload,
});

const archiveRequest = (payload: any) => ({
  type: actions.ARCHIVE_REQUEST,
  payload,
});

const archiveSuccess = () => ({
  type: actions.ARCHIVE_SUCCESS,
});

const archiveFailure = (error: any) => ({
  type: actions.ARCHIVE_FAILURE,
  error,
});

const restoreRequest = (payload: any) => ({
  type: actions.RESTORE_REQUEST,
  payload,
});

const restoreSuccess = () => ({
  type: actions.RESTORE_SUCCESS,
});

const restoreFailure = (error: any) => ({
  type: actions.RESTORE_FAILURE,
  error,
});

export {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
  createRequest,
  createSuccess,
  createFailure,
  updateRequest,
  updateSuccess,
  updateFailure,
  updatePriority,
  reorderRequest,
  reorderSuccess,
  reorderFailure,
  reorderList,
  archiveRequest,
  archiveSuccess,
  archiveFailure,
  restoreRequest,
  restoreSuccess,
  restoreFailure,
};
