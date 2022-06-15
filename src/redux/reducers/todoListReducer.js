import { handleActions } from 'redux-actions';

const defaultState = {
  taskList: [],
};

const todoListReducer = handleActions({}, defaultState);

export default todoListReducer;
