import React from 'react';

import PropTypes from 'prop-types';

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

CreateButton.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default CreateButton;
