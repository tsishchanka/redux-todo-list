import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Button, TextField } from '@mui/material';

import {
  Container,
  Title,
  TodoItemWrapper,
  ButtonsWrapper,
  ErrorMessageField,
} from './styled';

const TodoItem = () => {
  const initialValues = { inputText: '', address: '' };
  const onSubmit = (values, onSubmitProps) => {
    console.log('VALUES', values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };
  const validate = (values) => {
    let errors = {};

    if (!values.inputText) {
      errors.inputText = 'To create a task this field should not be empty...';
    }

    return errors;
  };
  return (
    <Container>
      <Title>To-do List</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {(formik) => {
          return (
            <Form>
              <TodoItemWrapper>
                <Field name='inputText'>
                  {({ field }) => {
                    return (
                      <TextField
                        id='inputText'
                        multiline
                        fullWidth
                        placeholder='Type your task here ...'
                        maxRows={8}
                        {...field}
                      ></TextField>
                    );
                  }}
                </Field>

                <ButtonsWrapper>
                  <Button
                    type='submit'
                    variant='contained'
                    size='medium'
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Create
                  </Button>
                </ButtonsWrapper>
              </TodoItemWrapper>

              <ErrorMessage name='inputText'>
                {(errorMsg) => (
                  <ErrorMessageField>{errorMsg}</ErrorMessageField>
                )}
              </ErrorMessage>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default TodoItem;
