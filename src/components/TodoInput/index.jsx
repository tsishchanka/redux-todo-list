import React from 'react';

import { Formik, Form, Field } from 'formik';

import { TextField } from '@mui/material';

import CreateButton from '../Buttons/CreateButton';
import ErrorMessageField from '../ErrorMessageField';

import { TodoInputWrapper } from './styled';

const TodoInput = ({
  initialValues,
  isEditMode,
  label,
  name,
  validate,
  handleUndo,
  onSubmit,
  ...rest
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {formik => {
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
              {isEditMode && <button onClick={handleUndo}>Cancel</button>}
            </TodoInputWrapper>
            <ErrorMessageField name={name} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default TodoInput;
