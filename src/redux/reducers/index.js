import { combineReducers } from 'redux';

import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({
  toDoList: todoListReducer,
});

export default rootReducer;
