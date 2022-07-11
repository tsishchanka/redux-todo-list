const validateFormik = values => {
  const errors = {};
  if (!values.text) {
    errors.text = 'The task field is empty.';
  }
  return errors;
};

export default validateFormik;
