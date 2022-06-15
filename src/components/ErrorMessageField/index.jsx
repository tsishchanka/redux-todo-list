import React from 'react'

import { ErrorMessage } from 'formik'
import { InputError } from './styled'

const ErrorMessageField = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errorMsg) => <InputError>{errorMsg}</InputError>}
    </ErrorMessage>
  )
}

export default ErrorMessageField
