import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button';

import {
  ItemWrapper,
  TodoTextWrapper,
  TodoText,
  IconButtonsWrapper,
} from './styled';

const TodoItem = ({ orderNumber, text, onEdit, onDelete }) => {
  const order = `${orderNumber}. ${text}`;
  return (
    <ItemWrapper>
      <TodoTextWrapper>
        <TodoText>{order}</TodoText>
      </TodoTextWrapper>
      <IconButtonsWrapper>
        <Button mode="edit" title="Edit Task" onEdit={onEdit} />
        <Button mode="delete" title="Delete Task" onDelete={onDelete} />
      </IconButtonsWrapper>
    </ItemWrapper>
  );
};

TodoItem.propTypes = {
  orderNumber: PropTypes.number,
  text: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TodoItem;
