import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import {
  Container,
  Title,
  TodoWrapper,
  ListWrapper,
  CreateTodoWrapper,
} from './styled';

import TodoInput from '@/components/TodoInput';
import TodoItem from '@/components/TodoItem';
import EditableTodo from '@/components/EditableTodo';
import { CREATE_TASK_ACTION } from '@/constants';

const INITIAL_VALUES = { text: '' };

const TodoList = ({ taskList, onEditMode, onTaskRemove, onDiscardChanges }) => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (values, onSubmitProps) => {
      dispatch(CREATE_TASK_ACTION(values));
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
            initialValues={INITIAL_VALUES}
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
