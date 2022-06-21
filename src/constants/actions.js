import { createAction } from 'redux-actions';

export const CREATE_TASK_ACTION = createAction('CREATE_TASK_ACTION');
export const DELETE_TASK_ACTION = createAction('DELETE_TASK_ACTION');
export const SET_EDIT_MODE_ACTION = createAction('SET_EDIT_MODE_ACTION');
export const SAVE_EDITED_TASK_ACTION = createAction('SAVE_EDITED_TASK_ACTION');
export const DISCARD_CHANGES_ACTION = createAction(' DISCARD_CHANGES_ACTION');
