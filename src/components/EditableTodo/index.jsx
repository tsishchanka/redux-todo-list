import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import TodoInput from '../TodoInput';

import { SAVE_EDITED_TASK_ACTION } from '@/constants';

const EditableTodo = ({ initialText, isEditMode, name, id, onUndo }) => {
  const dispatch = useDispatch();
  const INITIAL_VALUES = { id, text: initialText };

  const handleSubmit = useCallback(
    (values, onSubmitProps) => {
      const inputData = values.text;
      dispatch(SAVE_EDITED_TASK_ACTION({ id, inputData }));
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
    [id, dispatch],
  );

  return (
    <TodoInput
      isEditMode={isEditMode}
      name={name}
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      onUndo={() => onUndo(INITIAL_VALUES.id)}
    />
  );
};

EditableTodo.propTypes = {
  isEditMode: PropTypes.bool,
  initialText: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onUndo: PropTypes.func,
};

export default EditableTodo;
