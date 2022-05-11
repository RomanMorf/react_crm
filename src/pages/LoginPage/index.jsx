import React from 'react';
import './style.scss';
import { 
  getAuth,
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import { useLocation } from 'react-router-dom'
import { createUser } from 'src/store/userSlice';
import { checkOnExists } from 'src/helpers/firebase/checkOnExists';
import { errorHandle } from 'src/helpers/errors/errorHandle';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useInput } from 'src/hooks/useInput';
import { useLoading } from 'src/hooks/useLoading';

import InputField from 'src/components/elements/InputField';
import Loader from 'src/components/Loader'
import Button from 'src/components/elements/Button';
import logo from 'src/assets/img/google_logo.svg';


const provider = new GoogleAuthProvider();

function Login() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = getAuth()

  const email = useInput('')
  const pass = useInput('')
  const {loading, setLoading} = useLoading(false)

  const redirectFrom = location?.state?.from?.pathname

  const singInHandle = async () => {
    if (email.value.trim() || pass.value.trim()) {
      try {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email.value, pass.value)
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
      navigate(redirectFrom || '/')
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
            {...email}
            placeholder='Enter your email'
          />
        </div>
        <div className="form_slot">
          <InputField 
            name='pass'
            {...pass}
            placeholder='Enter your pass'
          />
        </div>
        <div className="form_bottom mb-10">
          <Button name="Sign in" onClick={singInHandle}/>
          <Button name="Sign in with google" onClick={singInWithGoogleHandle} img={logo}/>
        </div>       
        <div className='form_bottom'>
          <span>
            <span>If you don't have an accaunt yet, </span>
            <a onClick={() => navigate('/auth/register')}>Register now</a>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login;