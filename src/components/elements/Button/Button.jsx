import './style.scss'

function Button({ name, onClick, className, img, disabled }) {
  return (
    <button
      className={className ? `${className} button` : 'button'}
      onClick={onClick}
      disabled={disabled ? disabled : null}
    >
      {img && 
        <div className='button_logo'>
          <img src={img} alt="button logo" />
        </div>}
      <div className='button_text'>
        {name}
      </div>
    </button>
  )
}

export default Button
