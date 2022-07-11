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

import Input from '@/components/Input';
import TodoItem from '@/components/Item';
import EditableTodo from '@/components/EditableTodo';
import { CREATE_TASK } from '@/actions';

const INITIAL_VALUES = { text: '' };

const TodoList = ({ taskList, onEditMode, onTaskRemove, onDiscardChanges }) => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (values, onSubmitProps) => {
      dispatch(CREATE_TASK(values));
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
          <Input
            name="text"
            initialValues={INITIAL_VALUES}
            onSubmit={handleSubmit}
          />
        </CreateTodoWrapper>
        <ListWrapper>
          {taskList.map(({ id, text, isEditMode }, index) => {
            return !isEditMode ? (
              <TodoItem
                orderNumber={index + 1}
                key={id}
                text={text}
                onEdit={onEditMode(id)}
                onDelete={onTaskRemove(id)}
              />
            ) : (
              <EditableTodo
                name="text"
                isEditMode={isEditMode}
                id={id}
                key={id}
                initialText={text}
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
