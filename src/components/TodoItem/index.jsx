import React from 'react';

import PropTypes from 'prop-types';

import { EditButton, DeleteButton } from '../Buttons';

import {
  TodoItemWrapper,
  TodoTextWrapper,
  TodoText,
  IconButtonsWrapper,
} from './styled';

const TodoItem = ({ orderNumber, text, onEdit, onDelete }) => {
  return (
    <TodoItemWrapper>
      <TodoTextWrapper>
        <TodoText>
          {orderNumber}. {text}
        </TodoText>
      </TodoTextWrapper>
      <IconButtonsWrapper>
        <EditButton onEdit={onEdit} />
        <DeleteButton onDelete={onDelete} />
      </IconButtonsWrapper>
    </TodoItemWrapper>
  );
};

TodoItem.propTypes = {
  orderNumber: PropTypes.number,
  text: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TodoItem;
