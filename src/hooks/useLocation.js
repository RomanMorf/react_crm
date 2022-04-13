import { useState } from 'react';

const useLocation = () => {
  const [coords, setCoords] = useState('')

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  const success = (pos) => {
    const position = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    // console.log(position, 'position');    
    setCoords(position)
  }
  
  const error = (error) => {
    console.log(error, 'error')
  }

  const getLocation = async () => {
    await navigator.geolocation.getCurrentPosition(success, error, options)
  }

  return {
    coords,
    setCoords,
    getLocation
  }
}

export { useLocation };