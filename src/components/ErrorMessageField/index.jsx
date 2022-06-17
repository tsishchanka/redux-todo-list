import React from 'react';

import PropTypes from 'prop-types';

import { ErrorMessage } from 'formik';

import { InputError } from './styled';

const ErrorMessageField = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {errorMsg => <InputError>{errorMsg}</InputError>}
    </ErrorMessage>
  );
};

ErrorMessageField.propTypes = {
  name: PropTypes.string,
};

export default ErrorMessageField;
