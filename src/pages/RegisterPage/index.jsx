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
import { validate } from 'src/helpers/validate';

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
      {loading && <Loader large />}
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