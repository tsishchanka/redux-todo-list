import { Formik, Form } from 'formik';
import React from 'react';

import CreateButton from '../Buttons/CreateButton';
import ErrorMessageField from '../ErrorMessageField';
import TodoInput from '../TodoInput';

import { Container, Title, TodoItemWrapper } from './styled';

const TodoLayout = () => {
  const initialValues = { inputText: '' };

  const onSubmit = (values, onSubmitProps) => {
    console.log('VALUES', values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };
  const validate = values => {
    const errors = {};

    if (!values.inputText) {
      errors.inputText = 'The task field is empty.';
    }
    return errors;
  };
  return (
    <Container>
      <Title>To-do List</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}>
        {formik => {
          return (
            <Form>
              <TodoItemWrapper>
                <TodoInput name="inputText" />

                <CreateButton disabled={!formik.isValid || formik.isSubmitting}>
                  Create
                </CreateButton>
              </TodoItemWrapper>
              <ErrorMessageField name="inputText" />
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default TodoLayout;
