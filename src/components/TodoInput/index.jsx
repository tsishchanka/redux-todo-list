import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form, Field } from 'formik';

import { TextField } from '@mui/material';

import CreateButton from '../Buttons/CreateButton';
import ErrorMessageField from '../ErrorMessageField';

import { TodoInputWrapper } from './styled';

const TodoInput = ({
  onSubmit,
  initialValues,
  label,
  name,
  validate,
  ...rest
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {formik => {
        console.log('formik.values', formik.values);
        return (
          <Form>
            <TodoInputWrapper>
              <Field name={name}>
                {({ field }) => {
                  return (
                    <TextField
                      id={name}
                      multiline
                      fullWidth
                      placeholder="Type your task here ..."
                      maxRows={8}
                      {...field}
                      {...rest}
                    />
                  );
                }}
              </Field>
              <CreateButton disabled={!formik.isValid || formik.isSubmitting}>
                Save
              </CreateButton>
            </TodoInputWrapper>
            <ErrorMessageField name={name} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default TodoInput;
