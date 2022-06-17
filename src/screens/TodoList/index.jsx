/* eslint-disable import/order */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import TodoInput from '@/components/TodoInput';
import TodoItem from '@/components/TodoItem';
import EditableTodo from '@/components/EditableTodo';
import { CREATE_TASK } from '@/redux/actions';

import {
  Container,
  Title,
  TodoWrapper,
  ListWrapper,
  CreateTodoWrapper,
} from './styled';

const TodoList = ({
  taskList,
  handleEditMode,
  handleTaskRemove,
  handleDiscardChanges,
}) => {
  const dispatch = useDispatch();

  const initialValues = { text: '' };

  const onSubmit = useCallback(
    (values, onSubmitProps) => {
      const inputData = values.text;
      dispatch(CREATE_TASK({ text: inputData }));
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
            onSubmit={onSubmit}
          />
        </CreateTodoWrapper>
        <ListWrapper>
          {taskList.map((task, index) => {
            return !task.isEditMode ? (
              <TodoItem
                orderNumber={index + 1}
                key={task.id}
                text={task.text}
                handleEdit={() => handleEditMode(task.id)}
                handleDelete={() => handleTaskRemove(task.id)}
              />
            ) : (
              <EditableTodo
                name="text"
                isEditMode={task.isEditMode}
                id={task.id}
                key={task.id}
                initialText={task.text}
                handleUndo={handleDiscardChanges}
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
  handleEditMode: PropTypes.func,
  handleTaskRemove: PropTypes.func,
  handleDiscardChanges: PropTypes.func,
};

export default TodoList;
