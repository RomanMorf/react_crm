import './style.scss'

function Button({ name, onClick, className, img }) {
  return (
    <button
      className={className ? `${className} button` : 'button'}
      onClick={onClick}
    >
      {img && <img src={img} alt="button logo" />}
      {name}
    </button>
  )
}

export default Button
