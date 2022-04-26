import './style.scss'
import React, { useRef } from 'react';

function InputField({
    id,
    name,
    type,
    value, 
    placeholder = ' ',
    onChange,
    handleInput, 
    handleEnter,
    handleBlur,
    className,
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
        id={id}
        type={type}
        className={className ? `${className} inputfield` : 'inputfield'}
        ref={inputEl}
        placeholder=' '
        value={value}
        name={name}
        onBlur={handleBlur}
        onChange={e => inputAction(e)} 
        onKeyUp={enterAction}
      />
      <label 
        onClick={inputSelect} 
        htmlFor={name} 
        className='inputfield_placeholder'
      >{placeholder}</label>
    </div>
  )
}

export default InputField;
