import React from 'react';

import PropTypes from 'prop-types';

import { Tooltip, IconButton } from '@mui/material';
import { BookmarkAdded as BookmarkAddedIcon } from '@mui/icons-material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Cancel as CancelIcon } from '@mui/icons-material';
import { Edit as EditIcon } from '@mui/icons-material';

import { ButtonsWrapper } from './styled';

const Button = ({ disabled, type, title, mode, onEdit, onDelete, onUndo }) => {
  const iconColor = disabled ? 'neutral' : 'primary';

  const getIcon = mode => {
    switch (mode) {
      case 'create':
        return <BookmarkAddedIcon color={iconColor} />;
      case 'delete':
        return <DeleteIcon color="primary" />;
      case 'cancel':
        return <CancelIcon color="primary" />;
      case 'edit':
        return <EditIcon color="primary" />;
      default:
        return <BookmarkAddedIcon color={iconColor} />;
    }
  };

  const getClickMode = mode => {
    switch (mode) {
      case 'delete':
        return onDelete;
      case 'cancel':
        return onUndo;
      case 'edit':
        return onEdit;
      default:
        return onUndo;
    }
  };

  return (
    <ButtonsWrapper>
      <Tooltip title={title} enterDelay={500}>
        <IconButton
          type={type}
          disabled={mode === 'create' && disabled}
          onClick={getClickMode(mode)}
        >
          {getIcon(mode)}
        </IconButton>
      </Tooltip>
    </ButtonsWrapper>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  mode: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onUndo: PropTypes.func,
};

export default Button;
