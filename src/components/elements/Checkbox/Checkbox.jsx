import './style.scss'

function Checkbox({checked, onChange, className, id}) {

  return (
    <>
      <input 
        type="checkbox" 
        className={ className ? `checkbox ${className} ` : 'checkbox'}
        checked={ checked } 
        onChange={ onChange }
        id={ id }
      />
      <label role='checkbox_label' onClick={onChange}></label>
    </>
  )
}

export default Checkbox;