import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import TodoInput from '../TodoInput';

import { TodoItemWrapper } from './styled';

import { SAVE_EDITED_TASK } from '@/actions';

const EditableTodo = ({ initialText, isEditMode, name, id, onUndo }) => {
  const dispatch = useDispatch();
  const INITIAL_VALUES = { id, text: initialText };

  const handleSubmit = useCallback(
    (values, onSubmitProps) => {
      const inputData = values.text;
      dispatch(SAVE_EDITED_TASK({ id, inputData }));
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
    [id, dispatch],
  );

  return (
    <TodoItemWrapper>
      <TodoInput
        isEditMode={isEditMode}
        name={name}
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        onUndo={onUndo(INITIAL_VALUES.id)}
      />
    </TodoItemWrapper>
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
