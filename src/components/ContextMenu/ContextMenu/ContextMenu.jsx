import React from 'react';
import './style.scss';

function ContextMenu({ anchorPoint, handleClick, menuList }) {
  const {x, y} = anchorPoint

  return (
    <div className='context-menu' style={{top: `${y}px`, left: `${x}px` }}>
      <ul className='context-menu_list'>
        {menuList && menuList.map((el, idx) => {
          return (
            <li 
              className='context-menu_item' 
              onClick={ () => handleClick(el.action) }
              data-val={ el.action }
              key={ idx } 
            >{ el.text }</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ContextMenu

