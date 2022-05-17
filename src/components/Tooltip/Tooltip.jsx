import React, { 
  useRef, 
  // useState, 
  useEffect, 
} from 'react';

import './style.scss'

function ToolTip({children, text}) {
  const tooltipEl = useRef(null)

  const handleHover = () => console.log('handleHover');

  useEffect(() => {
    if (tooltipEl.current) {
      tooltipEl.current.addEventListener("hover", handleHover);
    }
    return () => {
      document.current.removeEventListener("hover");
    }
  }, []);

  return (
    <div className='tooltip' ref={tooltipEl}>
      <span className='tooltip_text'>{ text }</span>
      { children }
    </div>
  )
}

export default ToolTip;