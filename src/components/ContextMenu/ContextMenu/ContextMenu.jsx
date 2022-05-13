import React, { useState, useEffect, useRef } from 'react';
import ContextMenuItem from '../ContextMenuItem';
import './style.scss';

function ContextMenu({ anchorPoint, handleClick, menuList }) {
  const [windowSize, setWindowSize] = useState(null)
  const [menuParams, setMenuParams] = useState(null)
  const [showCoords, setShowCoords] = useState({ x: -100, y: -100 })

  const menuEl = useRef(null)

  const calculateCoords = () => {
    if ((anchorPoint.x + menuParams.offsetWidth) > windowSize.with) {
      setShowCoords({
        x: anchorPoint.x - menuParams.offsetWidth,
        y: (windowSize.with < 768) ? anchorPoint.y - menuParams.offsetHeight - (window?.navigator?.platform !== 'Win32' ? 40 : 0) : anchorPoint.y,
      })
    }
    else {
      setShowCoords({
        x: anchorPoint.x,
        y: (windowSize.with < 768) ? anchorPoint.y - menuParams.offsetHeight - (window?.navigator?.platform !== 'Win32' ? 40 : 0) : anchorPoint.y,
      })
    }
  }

  useEffect(() => {
    setWindowSize({
      with: window.innerWidth,
      heigth: window.innerHeight
    })

    setMenuParams({
      offsetHeight: menuEl.current.offsetHeight,
      offsetWidth: menuEl.current.offsetWidth,
    })
  }, []);

  useEffect(() => {
    if (windowSize) {
      calculateCoords()
    }
  }, [windowSize]);

  return (
    <>
      <div ref={ menuEl } className='context-menu' style={{top: `${showCoords.y}px`, left: `${showCoords.x}px`, display: 'block' }}>
        <ul className='context-menu_list'>
          {menuList && menuList.map((item, idx) => {
            return (
              <ContextMenuItem
                className='context-menu_item'
                menuItem={ item }
                onClick={ () => handleClick(item.action) }
                key={ idx } 
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default ContextMenu

