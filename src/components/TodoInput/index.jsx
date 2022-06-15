import React from 'react'

import { Field } from 'formik'

import { TextField } from '@mui/material'

const TodoInput = ({ label, name, ...rest }) => {
  return (
    <Field name={name}>
      {({ field }) => {
        return (
          <TextField
            id={name}
            multiline
            fullWidth
            placeholder="Type your task here ..."
            maxRows={8}
            {...field}
            {...rest}></TextField>
        )
      }}
    </Field>
  )
}

export default TodoInput
