import React from 'react';

import PropTypes from 'prop-types';

import { IconButton, Tooltip } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

import { ButtonsWrapper } from './styled';

const EditButton = ({ onEdit }) => {
  return (
    <ButtonsWrapper>
      <Tooltip title="Edit Task" enterDelay={600}>
        <IconButton color="secondary" onClick={onEdit}>
          <EditIcon color="primary" />
        </IconButton>
      </Tooltip>
    </ButtonsWrapper>
  );
};

EditButton.propTypes = {
  onEdit: PropTypes.func,
};

export default EditButton;
