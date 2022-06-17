import React from 'react';

import { Formik, Form, Field } from 'formik';

import { TextField } from '@mui/material';

import { CreateButton, DiscardChangesButton } from '../Buttons';
import ErrorMessageField from '../ErrorMessageField';

import { TodoInputWrapper } from './styled';

const TodoInput = ({
  initialValues,
  isEditMode,
  label,
  name,
  handleUndo,
  onSubmit,
  ...rest
}) => {
  const validate = values => {
    const errors = {};

    if (!values.text) {
      errors.text = 'The task field is empty.';
    }
    return errors;
  };
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
              <CreateButton
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              />
              {isEditMode && <DiscardChangesButton handleUndo={handleUndo} />}
            </TodoInputWrapper>
            <ErrorMessageField name={name} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default TodoInput;
