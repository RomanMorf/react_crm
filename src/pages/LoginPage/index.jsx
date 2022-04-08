import React, { useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux'
import InputField from '../../components/InputField';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader'
import { 
  getAuth,
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth'
import { setAuth } from '../../store/authSlice'

const provider = new GoogleAuthProvider();

function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)

  const auth = getAuth()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const singInHandle = async () => {
    if (email.trim() || pass.trim()) {
      try {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(setAuth({
            email: user.email,
            uid: user.uid,
            token: user.accessToken
          }))
        })
        setLoading(false)
        navigate('/')
      } catch (e) {
        setLoading(false)
        throw e
      }
    }
  }
  const singInWithGoogleHandle = async () => {

    try {
      setLoading(true)
      await signInWithPopup(auth, provider)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.uid, 'uid');
          dispatch(setAuth({
            email: user.email,
            uid: user.uid,
            token: user.accessToken
          }))
        }).catch(e => {
          throw e
        });
        navigate('/')
      setLoading(false)
    } catch (e) {
      setLoading(false)
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