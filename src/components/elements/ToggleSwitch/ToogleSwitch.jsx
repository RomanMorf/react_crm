import './style.scss'

function ToggleSwitch({
  id,
  round,
  checked,
  onChange,
  className,
}) {
  return (
    <label className={className ? `${className} switch` : "switch"}>
      <input 
        id={id} 
        type="checkbox" 
        onChange={ onChange } 
        checked={ checked }
      />
      <span className={round ? "slider round" : "slider"}></span>
    </label>  
  )
}

export default ToggleSwitch;