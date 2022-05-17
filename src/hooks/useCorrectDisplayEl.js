import { 
  useState, 
  useEffect, 
} from 'react';

const useCorrectDisplayEl = ( anchorPoint ) => {
  const [ coords, setCoords ] = useState({ x: -100, y: -100 })
  const [ htmlEl, setHtmlEl ] = useState(null)

  useEffect(() => {
    if (htmlEl) {
      calculateCoords()
    }
  }, [htmlEl])

  const calculateCoords = () => {
    if (anchorPoint) {
      if ((anchorPoint.x + htmlEl.current.offsetWidth) > window.innerWidth) {
        setCoords({
          x: anchorPoint.x - htmlEl.current.offsetWidth,
          y: (window.innerWidth < 768) 
          ? anchorPoint.y - htmlEl.current.offsetHeight - (
            window?.navigator?.platform !== 'Win32' 
            ? 40 : 0) 
          : anchorPoint.y,
        })
      }
      else {
        setCoords({
          x: anchorPoint.x,
          y: (window.innerWidth < 768) 
          ? anchorPoint.y - htmlEl.current.offsetHeight - (
            window?.navigator?.platform !== 'Win32' 
            ? 40 : 0) 
          : anchorPoint.y,
        })
      }
    } else {
      console.log('no - anchorPoint');
    }
  }



  return { 
    coords, 
    setHtmlEl, 
  }
} 

export { useCorrectDisplayEl }