import React from 'react';

import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { TextField } from '@mui/material';

import Button from '../Button';

import validateFormik from '../../utils/validate';

import { InputWrapper } from './styled';

const Input = ({ initialValues, isEditMode, name, onUndo, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validateFormik}
    >
      {formik => {
        return (
          <Form>
            <InputWrapper>
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
            </InputWrapper>
            <ErrorMessage name={name} />
          </Form>
        );
      }}
    </Formik>
  );
};

Input.propTypes = {
  isEditMode: PropTypes.bool,
  initialValues: PropTypes.object,
  name: PropTypes.string,
  onSubmit: PropTypes.func,
  onUndo: PropTypes.func,
};

export default Input;
