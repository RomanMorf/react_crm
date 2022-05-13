import './style.scss'

function ContextMenuItem({menuItem, onClick, className, style}) {
  return (
    <li 
      style={style}
      onClick={ onClick }
      className={ className }
      data-val={ menuItem.action }
    >{ menuItem.text }</li>
  )
}

export default ContextMenuItem;