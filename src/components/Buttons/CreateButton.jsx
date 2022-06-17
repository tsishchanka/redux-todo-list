import React from 'react';

import { Tooltip, IconButton } from '@mui/material';
import { BookmarkAdded as BookmarkAddedIcon } from '@mui/icons-material';

import { ButtonsWrapper } from './styled';

const CreateButton = ({ disabled, type }) => {
  return (
    <ButtonsWrapper>
      <Tooltip title="Create Task" enterDelay={500}>
        <IconButton type={type} disabled={disabled}>
          <BookmarkAddedIcon color={disabled ? 'neutral' : 'primary'} />
        </IconButton>
      </Tooltip>
    </ButtonsWrapper>
  );
};

export default CreateButton;
