import React from 'react';

import { Button } from '@mui/material';

import { ButtonsWrapper } from './styled';

const CreateButton = ({ children, disabled }) => {
  return (
    <ButtonsWrapper>
      <Button
        type="submit"
        variant="contained"
        size="medium"
        disabled={disabled}
      >
        {children}
      </Button>
    </ButtonsWrapper>
  );
};

export default CreateButton;
