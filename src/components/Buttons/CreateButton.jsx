import React from 'react'

import { Button } from '@mui/material'

const CreateButton = ({ children, disabled }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      size="medium"
      disabled={disabled}>
      {children}
    </Button>
  )
}

export default CreateButton
