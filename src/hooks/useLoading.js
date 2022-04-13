import { useState } from 'react';

const useLoading = (initialState = true) => {
  const [loading, setLoading] = useState(initialState)

  const toggleLoading = () => setLoading(!loading)
  const turnOnLoading = () => setLoading(true)
  const turnOffLoading = () => setLoading(false)

  return {
    loading,
    setLoading,
    toggleLoading,
    turnOnLoading,
    turnOffLoading
  }
}

export { useLoading }