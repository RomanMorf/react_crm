import './style.scss'

function Button({ name, type, id, onClick, className, img, disabled, googleIcon }) {
  return (
    <button
      className={className ? `${className} button` : 'button'}
      onClick={onClick}
      disabled={disabled ? disabled : null}
      type={type}
      id={id}
    >
      {img && 
        <div className='button_logo'>
          <img src={img} alt="button logo" />
        </div>}
      <div className='button_text'>
        <span className='button_name'>{name}</span>
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
