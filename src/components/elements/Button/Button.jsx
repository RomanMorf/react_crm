import './style.scss'

function Button({ name, type, onClick, className, img, disabled, googleIcon }) {
  return (
    <button
      className={className ? `${className} button` : 'button'}
      onClick={onClick}
      disabled={disabled ? disabled : null}
      type={type}
    >
      {img && 
        <div className='button_logo'>
          <img src={img} alt="button logo" />
        </div>}
      <div className='button_text'>
        {name}
        {googleIcon && 
          <span className="material-icons">
            {googleIcon}
          </span>
        }
      </div>
    </button>
  )
}

export default Button
