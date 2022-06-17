import React from 'react';

import PropTypes from 'prop-types';

import { Formik, Form, Field } from 'formik';

import { TextField } from '@mui/material';

import { CreateButton, DiscardChangesButton } from '../Buttons';
import ErrorMessageField from '../ErrorMessageField';

import { TodoInputWrapper } from './styled';

const TodoInput = ({
  initialValues,
  isEditMode,
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
                      placeholder="Enter your task here ..."
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

TodoInput.propTypes = {
  isEditMode: PropTypes.bool,
  initialValues: PropTypes.object,
  name: PropTypes.string,
  onSubmit: PropTypes.func,
  handleUndo: PropTypes.func,
};

export default TodoInput;
