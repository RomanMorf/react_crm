import React, {useState, useRef} from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';

function Form({children, submitHandle, resetHandle}) {
  const [ formData, setFormData ] = useState({})
  const formEl = useRef(null)
  const navigate = useNavigate()
  const wrongLogin = true
  const wrongPassword = true

  function inputHandle(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <form 
      ref={formEl} 
      className='form' 
      onSubmit={(e) => submitHandle(e)}
    >
      {children}
      <div className='form_slot'>
        <input 
          id='login' 
          className='form_input' 
          type='text' 
          name='login' 
          placeholder=' ' 
          onChange={e => inputHandle(e)} 
        />
        <label htmlFor='login' className='form_placeholder'>Login</label>
        {wrongLogin && <small className='form_helper'>Enter your login</small>}
      </div>
      <div className='form_slot'>
        <input 
          id='pass' 
          className='form_input' 
          type='password' 
          name='password' 
          placeholder=' '
          onChange={e => inputHandle(e)} 
        />
        <label htmlFor='pass' className='form_placeholder'>Password</label>
        {wrongPassword && <small className='form_helper'>Enter your password</small>}
      </div>
      <div className='form_bottom'>
        <button onClick={(e) => submitHandle(e)}>Submit</button>
        <button onClick={() => resetHandle()}>Reset form</button>
      </div>
    </form>
  )
}

export default Form;