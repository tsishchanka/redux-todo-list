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
        return <DeleteIcon color="primary" onClick={onDelete} />;
      case 'cancel':
        return <CancelIcon color="primary" onClick={onUndo} />;
      case 'edit':
        return <EditIcon color="primary" onClick={onEdit} />;
      default:
        return <BookmarkAddedIcon color={iconColor} />;
    }
  };

  return (
    <ButtonsWrapper>
      <Tooltip title={title} enterDelay={500}>
        <IconButton type={type} disabled={mode === 'create' && disabled}>
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
