/* eslint-disable import/order */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import TodoInput from '@/components/TodoInput';
import TodoItem from '@/components/TodoItem';
import EditableTodo from '@/components/EditableTodo';
import { CREATE_TASK_ACTION } from '@/constants';

import {
  Container,
  Title,
  TodoWrapper,
  ListWrapper,
  CreateTodoWrapper,
} from './styled';

const TodoList = ({ taskList, onEditMode, onTaskRemove, onDiscardChanges }) => {
  const dispatch = useDispatch();

  const initialValues = { text: '' };

  const handleSubmit = useCallback(
    (values, onSubmitProps) => {
      const inputData = values.text;
      dispatch(CREATE_TASK_ACTION({ text: inputData }));
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
    [dispatch],
  );

  return (
    <Container>
      <TodoWrapper>
        <CreateTodoWrapper>
          <Title>Create your task</Title>
          <TodoInput
            name="text"
            initialValues={initialValues}
            onSubmit={handleSubmit}
          />
        </CreateTodoWrapper>
        <ListWrapper>
          {taskList.map((task, index) => {
            return !task.isEditMode ? (
              <TodoItem
                orderNumber={index + 1}
                key={task.id}
                text={task.text}
                onEdit={() => onEditMode(task.id)}
                onDelete={() => onTaskRemove(task.id)}
              />
            ) : (
              <EditableTodo
                name="text"
                isEditMode={task.isEditMode}
                id={task.id}
                key={task.id}
                initialText={task.text}
                onUndo={onDiscardChanges}
              />
            );
          })}
        </ListWrapper>
      </TodoWrapper>
    </Container>
  );
};

TodoList.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEditMode: PropTypes.func,
  onTaskRemove: PropTypes.func,
  onDiscardChanges: PropTypes.func,
};

export default TodoList;
