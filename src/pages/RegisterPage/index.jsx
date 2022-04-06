import React, { useState, useEffect } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux'
import InputField from '../../components/InputField';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader'
import { 
  getAuth,
  createUserWithEmailAndPassword, 
} from 'firebase/auth'

function Register() {
  const auth = getAuth()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [pass2, setPass2] = useState('')
  const [userName, setUserName] = useState('')

  const [passValid, setPassValid] = useState(true)
  
  const [loading, setloading] = useState(false)


  useEffect(() => {
    if (pass !== pass2) {
      setPassValid(false)
    } else {
      setPassValid(true)
    }
  }, [pass, pass2]);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const preventDefault = e => {
    e.preventDefault()
    return
  }

  const registerNewUser = () => {
    console.log('registerNewUser');

    const newUser = {
      email: email,
      pass: pass
    }

    console.log(newUser, 'newUser');
  }

  return (
    <div className="login">
      {loading && <Loader/>}
      <form className='form' onSubmit={preventDefault}>
        <h2>Login to your accaunt</h2>
        <div className='form_slot'>
          <InputField 
            name='email' 
            value={email}
            handleInput={setEmail}
            placeholder='Enter your email'
          />
        </div>
        <div className="form_slot">
          <InputField 
            name='pass'
            value={pass}
            handleInput={setPass}
            placeholder='Enter your pass'
          />
        </div>
        <div className="form_slot">
          <InputField 
            name='pass2'
            value={pass2}
            handleInput={setPass2}
            placeholder='Repeat your pass'
          />
        {!passValid && <span>Passwords not the same</span>}
        </div>
        <div className="form_slot">
          <InputField 
            name='userName'
            value={userName}
            handleInput={setUserName}
            placeholder='Enter you name'
          />
        </div>
        <div className="form_bottom">
          <button onClick={registerNewUser}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register;