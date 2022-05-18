import { 
  useEffect, 
  useRef 
} from 'react';
import './style.scss';

import ContextMenuItem from '../ContextMenuItem';
import { useCorrectDisplayEl } from 'src/hooks/useCorrectDisplayEl'

function ContextMenu({ anchorPoint, handleClick, menuList }) {
  const menuEl = useRef(null)
  const { coords, setHtmlEl } = useCorrectDisplayEl(anchorPoint)

  useEffect(() => {
    setHtmlEl(menuEl)
  }, []);


  return (
    <>
      <div 
      ref={ menuEl } 
      className='context-menu' 
      style={{
        top: `${coords.y}px`, 
        left: `${coords.x}px`, 
        display: 'block' 
        }}
      >

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

