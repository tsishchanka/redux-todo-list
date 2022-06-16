import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SET_EDIT_MODE } from '../redux/actions';

import TodoLayout from '@/components/TodoLayout';

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const { taskList } = useSelector(state => state.toDoList);

  const handleEditMode = useCallback(
    taskId => {
      console.log('taskId', taskId);
      dispatch(SET_EDIT_MODE(taskId));
    },
    [dispatch],
  );

  return <TodoLayout taskList={taskList} handleEditMode={handleEditMode} />;
};

export default TodoListContainer;
