const validate = values => {
  const errors = {};

  if (values.pass) {
    if (!values.pass) {
      errors.pass = 'Required field';
    } else if (values.pass.length <= 5) {
      errors.pass = `Must be 6 characters or more, now ( ${values.pass.length} )`;
    }
  }

  if (values.passRepeat) {
    if (!values.passRepeat) {
      errors.passRepeat = 'Required field';
    } else if (values.passRepeat !== values.pass) {
      errors.passRepeat = 'Passwords mast be the same';
    }
  }

  if (values.email) {
    if (!values.email) {
      errors.email = 'Required field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  }

  if (values.surname) {
    if (!values.surname) {
      errors.surname = 'Required field';
    } else if (values.surname.length < 3 ) {
      errors.surname = 'Must be 3 characters at least';
    } else if (values.surname.length > 15) {
      errors.surname = 'Must be 15 characters or less';
    }
  }

  if (values.name) {
    if (values.name.length < 3 ) {
      errors.name = 'Must be 3 characters at least';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  }

  if (values.nickName) {
    if (values.nickName.length < 3 ) {
      errors.nickName = 'Must be 3 characters at least';
    } else if (values.nickName.length > 15) {
      errors.nickName = 'Must be 15 characters or less';
    }
  }

  if (values.surName) {
    if (values.surName.length < 3 ) {
      errors.surName = 'Must be 3 characters at least';
    } else if (values.surName.length > 15) {
      errors.surName = 'Must be 15 characters or less';
    }
  }

  if (values.tel) {
    if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i.test(values.tel)) {
      errors.tel = 'Invalid telephone number (Format: +123456789)';
    }
  }

  return errors;
};

export { validate }
