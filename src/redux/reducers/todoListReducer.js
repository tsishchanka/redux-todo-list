import { handleActions } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

import * as actions from '@/redux/actions';

const DEFAULT_STATE = {
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

    [actions.DELETE_TASK]: (state, { payload: taskId }) => {
      const listCopy = [...state.taskList];
      const itemIndexToRemove = listCopy.findIndex(task => task.id === taskId);

      listCopy.splice(itemIndexToRemove, 1);
      return {
        taskList: listCopy,
      };
    },

    [actions.SAVE_EDITED_TASK]: (state, { payload }) => {
      const { id, inputData } = payload;

      const updatedState = state.taskList.map(task => {
        const isTaskToUpdate = task.id === id;

        return {
          ...task,
          text: isTaskToUpdate ? inputData : task.text,
          isEditMode: isTaskToUpdate ? false : task.isEditMode,
        };
      });
      return {
        taskList: updatedState,
      };
    },

    [actions.DISCARD_CHANGES]: (state, { payload: taskId }) => {
      const updatedState = state.taskList.map(task => ({
        ...task,
        isEditMode: task.id === taskId ? false : task.isEditMode,
      }));
      return {
        taskList: updatedState,
      };
    },
  },
  DEFAULT_STATE,
);

export default todoListReducer;
