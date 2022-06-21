import React from 'react';

import PropTypes from 'prop-types';

import { Tooltip, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

import { ButtonsWrapper } from './styled';

const DeleteButton = ({ onDelete }) => {
  return (
    <ButtonsWrapper>
      <Tooltip title="Delete Task" enterDelay={600}>
        <IconButton color="secondary" onClick={onDelete}>
          <DeleteIcon color="primary" />
        </IconButton>
      </Tooltip>
    </ButtonsWrapper>
  );
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func,
};

export default DeleteButton;
