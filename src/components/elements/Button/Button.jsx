import './style.scss'

function Button ({name, onClick, className}) {

  return (
    <button 
      className={className ?  className + 'button' : 'button'} 
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Button;