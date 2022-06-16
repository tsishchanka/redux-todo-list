import { handleActions } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

import * as actions from '../actions';

const defaultState = {
  taskList: [],
};

const todoListReducer = handleActions(
  {
    [actions.CREATE_TASK]: ({ taskList }, { payload }) => {
      const { text } = payload;
      const newTask = {
        id: uuidv4(),
        text: text,
        isEditMode: false,
      };
      return {
        taskList: [newTask, ...taskList],
      };
    },

    [actions.SET_EDIT_MODE]: (state, { payload: taskId }) => {
      const updatedState = state.taskList.map(task => ({
        ...task,
        isEditMode: taskId === task.id ? true : task.isEditMode,
      }));
      return {
        taskList: updatedState,
      };
    },
  },
  defaultState,
);

export default todoListReducer;
