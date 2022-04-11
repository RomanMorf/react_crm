import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
  getAuth,
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import { createUser } from 'src/store/userSlice';
import { checkOnExists } from 'src/helpers/firebase/checkOnExists';
import { errorHandle } from 'src/helpers/errors/errorHandle';

import InputField from 'src/components/InputField';
import Loader from 'src/components/Loader'


const provider = new GoogleAuthProvider();

function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)

  const auth = getAuth()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const singInHandle = async () => {
    if (email.trim() || pass.trim()) {
      try {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, pass)
        setLoading(false)
        navigate('/')
      } catch (e) {
        setLoading(false)
        errorHandle(e)
        throw e
      }
    }
  }

  const singInWithGoogleHandle = async () => {
    try {
      setLoading(true)
      await signInWithPopup(auth, provider)
        .then( async (userCredential) => {
          const user = userCredential.user;
          const userExist = await checkOnExists(user.uid)
          if (!userExist) {
            dispatch(createUser({...user}))
          }
        })
      navigate('/')
      setLoading(false)
    } catch (e) {
      setLoading(false)
      errorHandle(e)
      throw e
    }
  }

  const preventDefault = e => {
    e.preventDefault()
    return
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
        <div className="form_bottom">
          <button onClick={singInHandle}>Sign in</button>
          <button onClick={singInWithGoogleHandle}>Sign in with google</button>
        </div>       
        <div className="form_bottom">
          <p>
            <span>If you don't have an accaunt yet, </span>
            <a onClick={() => navigate('/auth/register')}>Register now</a>
          </p>
        </div>       
      </form>
    </div>
  )
}

export default Login;