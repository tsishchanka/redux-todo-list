import { createAction } from 'redux-actions';

import {
  CREATE_TASK_ACTION,
  DELETE_TASK_ACTION,
  SET_EDIT_MODE_ACTION,
  SAVE_EDITED_TASK_ACTION,
  DISCARD_CHANGES_ACTION,
} from '@/constants/';

export const CREATE_TASK = createAction(CREATE_TASK_ACTION);
export const DELETE_TASK = createAction(DELETE_TASK_ACTION);
export const SET_EDIT_MODE = createAction(SET_EDIT_MODE_ACTION);
export const SAVE_EDITED_TASK = createAction(SAVE_EDITED_TASK_ACTION);
export const DISCARD_CHANGES = createAction(DISCARD_CHANGES_ACTION);
