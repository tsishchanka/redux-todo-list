import React, { useState, useCallback } from 'react';

import { Formik, Form } from 'formik';

import TodoInput from '../TodoInput';

const EditableTodo = ({ initialText, onSubmit, name }) => {
  const [editableValue, setEditableValue] = useState(initialText);
  const initialValues = { text: initialText };

  // const onSubmit = useCallback((values, onSubmitProps) => {
  //   const inputData = values.inputText;
  //   console.log('VALUES', inputData);
  //   dispatch(CREATE_TASK({ text: inputData }));
  //   onSubmitProps.setSubmitting(false);
  //   onSubmitProps.resetForm();
  // }, []);
  console.log('initialValues', initialValues);
  const validate = values => {
    const errors = {};

    if (!values.text) {
      errors.text = 'The task field is empty.';
    }
    return errors;
  };

  return (
    <div>
      <TodoInput
        name={name}
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      />

      <button></button>
    </div>
  );
};

export default EditableTodo;
