import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import { Formik, Form } from 'formik';

// import CreateButton from '../Buttons/CreateButton';
// import ErrorMessageField from '../ErrorMessageField';
import TodoInput from '../TodoInput';
import TodoItem from '../TodoItem';
import EditableTodo from '../EditableTodo';
import { CREATE_TASK } from '../../redux/actions';

import {
  Container,
  Title,
  TodoWrapper,
  ListWrapper,
  CreateTodoWrapper,
} from './styled';

const TodoLayout = ({ taskList, handleEditMode }) => {
  const dispatch = useDispatch();

  const initialValues = { text: '' };

  const onSubmit = useCallback(
    (values, onSubmitProps) => {
      const inputData = values.text;
      console.log('onSubmitProps', onSubmitProps);
      console.log('VALUES', values);
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
          <Title>Create your first task</Title>
          <TodoInput
            name="text"
            initialValues={initialValues}
            onSubmit={onSubmit}
          />
        </CreateTodoWrapper>
        <ListWrapper>
          <Title>To-do List</Title>
          {taskList.map((task, index) => {
            return !task.isEditMode ? (
              <TodoItem
                orderNumber={index + 1}
                key={task.id}
                text={task.text}
                handleEdit={() => handleEditMode(task.id)}
              />
            ) : (
              <EditableTodo
                name="text"
                key={task.id}
                initialText={task.text}
                onSubmit={onSubmit}
              />
            );
          })}
        </ListWrapper>
      </TodoWrapper>
    </Container>
  );
};

export default TodoLayout;
