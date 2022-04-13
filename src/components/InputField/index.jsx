import './style.scss'
import React, { useRef } from 'react';


function InputField({
    value, 
    name,
    onChange,
    handleInput, 
    handleEnter,
    handleBlur,
    placeholder
  }) {

  const inputEl = useRef()
  
  const inputSelect = () => {
    inputEl.current.focus()
  }

  const inputAction = (e) => {
    if (onChange) onChange(e)
    if (handleInput) handleInput(e.target.value)
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
        className='inputfield'
        ref={inputEl}
        placeholder=' '
        value={value}
        name={name}
        onBlur={handleBlur}
        onChange={e => inputAction(e)} 
        onKeyUp={enterAction}
        />
      <label onClick={inputSelect} htmlFor={name} className='inputfield_placeholder'>{placeholder}</label>
    </div>
  )
}

export default InputField;