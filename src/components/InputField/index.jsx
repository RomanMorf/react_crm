import './style.scss'
import React, { useRef } from 'react';


function InputField({
    value, 
    name,
    handleInput, 
    handleEnter,
    placeholder
  }) {

  const inputEl = useRef()
  
  const inputSelect = () => {
    inputEl.current.focus()
  }
  
  const enterAction = e => {
    if (handleEnter) {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        handleEnter(e)
      }
    }
  }

  return (
    <div className='inputfield_wrapper'>
      <input 
        ref={inputEl}
        className='inputfield'
        placeholder=' '
        value={value}
        name={name}
        onChange={e => handleInput(e.target.value)} 
        onKeyUp={enterAction} 
        />
      <label onClick={inputSelect} htmlFor={name} className='inputfield_placeholder'>{placeholder}</label>
    </div>
  )
}

export default InputField;