import './style.scss'

function Checkbox({checked, onChange, className}) {

  return (
    <>
      <input 
        type="checkbox" 
        className={ className ? `checkbox ${className} ` : 'checkbox'}
        checked={ checked } 
        onChange={ onChange }
      />
      <label onClick={onChange}></label>
    </>
  )
}

export default Checkbox;