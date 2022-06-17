import React from 'react';

import { IconButton, Tooltip } from '@mui/material';

import { Edit as EditIcon } from '@mui/icons-material';

import { ButtonsWrapper } from './styled';

const EditButton = ({ handleEdit }) => {
  return (
    <ButtonsWrapper>
      <Tooltip title="Edit Task" enterDelay={600}>
        <IconButton color="secondary" onClick={handleEdit}>
          <EditIcon color="primary" />
        </IconButton>
      </Tooltip>
    </ButtonsWrapper>
  );
};

export default EditButton;
