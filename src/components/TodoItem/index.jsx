import React from 'react';

import PropTypes from 'prop-types';

import { EditButton, DeleteButton } from '../Buttons';

import {
  TodoItemWrapper,
  TodoTextWrapper,
  TodoText,
  IconButtonsWrapper,
} from './styled';

const TodoItem = ({ orderNumber, text, handleEdit, handleDelete }) => {
  return (
    <TodoItemWrapper>
      <TodoTextWrapper>
        <TodoText>
          {orderNumber}. {text}
        </TodoText>
      </TodoTextWrapper>
      <IconButtonsWrapper>
        <EditButton handleEdit={handleEdit} />
        <DeleteButton handleDelete={handleDelete} />
      </IconButtonsWrapper>
    </TodoItemWrapper>
  );
};

TodoItem.propTypes = {
  orderNumber: PropTypes.number,
  text: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default TodoItem;
