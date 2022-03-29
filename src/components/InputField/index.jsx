import './style.scss'

function InputField({
    text, 
    handleInput, 
    handleSubmit, 
    submitName,
    placeholder
  }) {
  
  const submitOnEnter = e => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      handleSubmit(e.target.value)
    }
  }

  return (
    <div className='inputfield_wrapper'>
      <input 
        className='inputfield'
        placeholder=' '
        value={text}
        onChange={e => handleInput(e.target.value)} 
        onKeyUp={submitOnEnter} 
        
        />
      <span className='inputfield_placeholder'>{placeholder}</span>
      <button className='inputfield_btn' onClick={handleSubmit}>{submitName}</button>
    </div>
  )
}

export default InputField;