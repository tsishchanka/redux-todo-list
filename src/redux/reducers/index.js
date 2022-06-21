import { combineReducers } from 'redux';

import toDoList from './todoListReducer';

const rootReducer = combineReducers({
  toDoList,
});

export default rootReducer;
