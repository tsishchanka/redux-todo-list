import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SET_EDIT_MODE, DELETE_TASK, DISCARD_CHANGES } from '../redux/actions';

import TodoLayout from '@/components/TodoLayout';

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const { taskList } = useSelector(state => state.toDoList);

  const handleEditMode = useCallback(
    taskId => {
      dispatch(SET_EDIT_MODE(taskId));
    },
    [dispatch],
  );

  const handleTaskRemove = useCallback(
    taskId => {
      dispatch(DELETE_TASK(taskId));
    },
    [dispatch],
  );

  const handleDiscardChanges = useCallback(
    id => {
      dispatch(DISCARD_CHANGES(id));
    },
    [dispatch],
  );

  return (
    <TodoLayout
      taskList={taskList}
      handleEditMode={handleEditMode}
      handleTaskRemove={handleTaskRemove}
      handleDiscardChanges={handleDiscardChanges}
    />
  );
};

export default TodoListContainer;
