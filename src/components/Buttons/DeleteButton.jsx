import React from 'react';

import { Tooltip, IconButton } from '@mui/material';

import { Delete as DeleteIcon } from '@mui/icons-material';

import { ButtonsWrapper } from './styled';

const DeleteButton = ({ handleDelete }) => {
  return (
    <ButtonsWrapper>
      <Tooltip title="Delete Task" enterDelay={600}>
        <IconButton color="secondary" onClick={handleDelete}>
          <DeleteIcon color="primary" />
        </IconButton>
      </Tooltip>
    </ButtonsWrapper>
  );
};

export default DeleteButton;
