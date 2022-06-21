import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  SET_EDIT_MODE_ACTION,
  DELETE_TASK_ACTION,
  DISCARD_CHANGES_ACTION,
} from '../constants/actions';

import TodoList from '@/screens/TodoList';

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const { taskList } = useSelector(state => state.toDoList);

  const handleEditMode = useCallback(
    taskId => {
      dispatch(SET_EDIT_MODE_ACTION(taskId));
    },
    [dispatch],
  );

  const handleTaskRemove = useCallback(
    taskId => {
      dispatch(DELETE_TASK_ACTION(taskId));
    },
    [dispatch],
  );

  const handleDiscardChanges = useCallback(
    id => {
      dispatch(DISCARD_CHANGES_ACTION(id));
    },
    [dispatch],
  );

  return (
    <TodoList
      taskList={taskList}
      onEditMode={handleEditMode}
      onTaskRemove={handleTaskRemove}
      onDiscardChanges={handleDiscardChanges}
    />
  );
};

export default TodoListContainer;
