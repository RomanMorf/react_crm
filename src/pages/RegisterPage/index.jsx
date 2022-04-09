import React, { useState, useEffect } from 'react';
import './style.scss';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  getAuth,
  createUserWithEmailAndPassword, 
} from 'firebase/auth';
import { createUser } from 'src/store/userSlice';

import Loader from 'src/components/Loader';
import InputField from 'src/components/InputField';

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    pass: '',
    pass2: '',
    checked: false
  })
  const [formValid, setFormValid] = useState({
    email: true,
    pass: true,
    checkPass: true,
    name: true,
  })
  const [readyForSubmit, setReadyForSubmit] = useState(false)

  const preventDefault = e => {
    e.preventDefault()
    return
  }

  const inputHandle = (e) => {
    const name = e.target.name
    const value = e.target.value 

    setForm({
      ...form,
      [name]: value
    })
  }

  const validHandle = (e) => {

    switch (e.target.name) {
      case 'email':
        const validateEmail = (email) => {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        }

        if (validateEmail(form.email)) {
          setFormValid({
            ...formValid,
            email: true
          })
        } else {
          setFormValid({
            ...formValid,
            email: false
          })
        }
        break;
      case 'pass':
        if (form.pass.length < 6) {
          setFormValid({
            ...formValid,
            pass: false
          })
        } else {
          setFormValid({
            ...formValid,
            pass: true
          })
        }
        break;
      case 'pass2':
        if (form.pass !== form.pass2) {
          setFormValid({
            ...formValid,
            checkPass: false
          })
        } else {
          setFormValid({
            ...formValid,
            checkPass: true
          })
        }
        break;
      case 'name':
        if (form.name.length <= 3) {
          setFormValid({
            ...formValid,
            name: false
          })
        } else {
          setFormValid({
            ...formValid,
            name: true
          })
        }
        break;

        default:
        break;
    }
  }

  const checkValid = () => {
    if (formValid.email &&
        formValid.name &&
        formValid.pass &&
        formValid.checkPass && 
        form.checked) {
      setReadyForSubmit(true)
    } else {
      setReadyForSubmit(false)
    }
  }

  const checkboxHandle = () => {
    setForm({
      ...form,
      checked: !form.checked
    })
  }

  const registerNewUser = async () => {
    setLoading(true)
    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, form.email, form.pass)
        .then(userCredential => {
          const user = userCredential.user;
          dispatch(createUser({...user, name: form.name}))
      })
      setLoading(false)
      navigate('/')
    } catch (e) {
      console.log(e);
      setLoading(false)
      throw e
    }
    console.log('registerNewUser');
  }

  useEffect(() => {
    checkValid()
  }, [form]);

  return (
    <div className="login">
      {loading && <Loader/>}
      <form className='form' onSubmit={preventDefault}>
        <h2>Register new accaunt</h2>
        <div className='form_slot'>
          <InputField 
            name='email' 
            value={form.email}
            handleBlur={validHandle}
            handleInput={inputHandle}
            placeholder='Enter your email'
          />
          {!formValid.email && <span className='form_helper'>Etner the correct email</span>}
        </div>
        <div className="form_slot">
          <InputField 
            name='pass'
            value={form.pass}
            handleBlur={validHandle}
            handleInput={inputHandle}
            placeholder='Enter your pass'
          />
          {!formValid.pass && <span className='form_helper'>Password must be more then 5 symbol</span>}
        </div>
        <div className="form_slot">
          <InputField 
            name='pass2'
            value={form.pass2}
            handleBlur={validHandle}
            handleInput={inputHandle}
            placeholder='Repeat your pass'
          />
        {!formValid.checkPass && <span className='form_helper'>Passwords must be the same</span>}
        </div>
        <div className="form_slot">
          <InputField 
            name='name'
            value={form.name}
            handleBlur={validHandle}
            handleInput={inputHandle}
            placeholder='Enter you name'
          />
          {!formValid.name && <span className='form_helper'>Name must be longer then 3 symbol</span>}
        </div>
        <div className="form_slot center mb-20">
          <span>
            <input 
              checked={form.checked}
              onChange={checkboxHandle}
              type='checkbox' name='agree'
            /> 
            <span>Agree with the ruls</span>
          </span>
        </div>
        <div className="form_bottom">
        <button onClick={() => navigate('/auth/login')}>Login</button>
        <button 
          disabled={!readyForSubmit} 
          onClick={registerNewUser}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register;