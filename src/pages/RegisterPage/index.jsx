import React from 'react';
import './style.scss';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  getAuth,
  createUserWithEmailAndPassword, 
} from 'firebase/auth';
import { createUser } from 'src/store/userSlice';
import { useToast } from 'src/hooks/useToast';
import { errorHandle } from 'src/helpers/errors/errorHandle';
import { useFormik } from 'formik';
import { useLoading } from 'src/hooks/useLoading';

import Loader from 'src/components/Loader';
import InputField from 'src/components/elements/InputField';
import Button from 'src/components/elements/Button';

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, setLoading } = useLoading(false)
  const { toastSuccess } = useToast()

  const registerNewUser = async (values) => {
    const {email, pass, userName} = values

    setLoading(true)
    try {
      const auth = getAuth()

      await createUserWithEmailAndPassword(auth, email, pass)
        .then(userCredential => {
          const user = userCredential.user;
          dispatch(createUser({...user, name: userName}))
      })

      setLoading(false)
      navigate('/')
      toastSuccess('Account successfuly created')

    } catch (e) {
      setLoading(false)
      errorHandle(e)
      throw e
    }
  }

  const validate = values => {
    const errors = {};
    if (!values.pass) {
      errors.pass = 'Required field';
    } else if (values.pass.length <= 5) {
      errors.pass = `Must be 6 characters or more, now ( ${values.pass.length} )`;
    }
  
    if (!values.passRepeat) {
      errors.passRepeat = 'Required field';
    } else if (values.passRepeat !== values.pass) {
      errors.passRepeat = 'Passwords mast be the same';
    }
  
    if (!values.email) {
      errors.email = 'Required field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.userName) {
      errors.userName = 'Required field';
    } else if (values.userName.length < 3 ) {
      errors.userName = 'Must be 5 characters at least';
    } else if (values.userName.length > 15) {
      errors.userName = 'Must be 15 characters or less';
    }

  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      pass: '',
      passRepeat: '',
      userName: ''
    },
    validate,
    onSubmit: values => registerNewUser(values),
  });

  return (
    <div className="register">
      {loading && <Loader/>}
      <form className='form' onSubmit={formik.handleSubmit}>
        <h2>Register new accaunt</h2>
        <div className='form_slot'>
          <InputField 
            id='email'
            name='email'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder='Enter your email'
          />
          {formik.errors.email ? <span className='form_helper'>{formik.errors.email}</span> : null}
        </div>
        <div className='form_slot'>
          <InputField 
            id='pass'
            name='pass'
            type='password'
            value={formik.values.pass}
            onChange={formik.handleChange}
            placeholder='Enter your password'
          />
          {formik.errors.pass ? <span className='form_helper'>{formik.errors.pass}</span> : null}
        </div>
        <div className='form_slot'>
          <InputField 
            id='passRepeat'
            name='passRepeat'
            type='password'
            value={formik.values.passRepeat}
            onChange={formik.handleChange}
            placeholder='Repeat your password'
          />
          {formik.errors.passRepeat ? <span className='form_helper'>{formik.errors.passRepeat}</span> : null}
        </div>
        <div className='form_slot'>
          <InputField 
            id='userName'
            name='userName'
            type='userName'
            value={formik.values.userName}
            onChange={formik.handleChange}
            placeholder='Enter your name'
          />
          {formik.errors.userName ? <span className='form_helper'>{formik.errors.userName}</span> : null}
        </div>
        <div className="form_bottom mb-10">
          <Button 
            type='submit' 
            name="register"
            disabled={
              formik.errors.userName ||
              formik.errors.email ||
              formik.errors.pass || 
              formik.errors.passRepeat ? true : false
            }
          />
        </div>
        <div className='form_bottom'>
          <span>
            <span>Already have an account? </span>
            <a onClick={() => navigate('/auth/login')}>Login</a>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Register;