import React from 'react';

import IconButton from '@mui/material/IconButton';

import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

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
        <IconButton color="secondary" onClick={handleEdit}>
          <EditIcon color="primary" />
        </IconButton>
        <IconButton color="secondary" onClick={handleDelete}>
          <DeleteIcon color="primary" />
        </IconButton>
      </IconButtonsWrapper>
    </TodoItemWrapper>
  );
};

export default TodoItem;
