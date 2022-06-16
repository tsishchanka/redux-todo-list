import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import TodoInput from '../TodoInput';
import { SAVE_EDITED_TASK } from '../../redux/actions';

const EditableTodo = ({ initialText, isEditMode, name, id, handleUndo }) => {
  const dispatch = useDispatch();
  const initialValues = { id, text: initialText };

  const onSubmit = useCallback(
    (values, onSubmitProps) => {
      const inputData = values.text;
      dispatch(SAVE_EDITED_TASK({ id, inputData }));
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
    [id, dispatch],
  );

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
        isEditMode={isEditMode}
        name={name}
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        handleUndo={() => handleUndo(initialValues.id)}
      />
    </div>
  );
};

export default EditableTodo;