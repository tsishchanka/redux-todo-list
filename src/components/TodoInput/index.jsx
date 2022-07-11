import React from 'react';

import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { TextField } from '@mui/material';

import Button from '../Button';

import { TodoInputWrapper } from './styled';

const TodoInput = ({
  initialValues,
  isEditMode,
  name,
  onUndo,
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
                      maxRows={8}
                      {...field}
                    />
                  );
                }}
              </Field>
              <Button
                mode="create"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
                title="Create Task"
              />
              {isEditMode && (
                <Button mode="cancel" title="Discard changes" onUndo={onUndo} />
              )}
            </TodoInputWrapper>
            <ErrorMessage name={name} />
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
  onUndo: PropTypes.func,
};

export default TodoInput;
