import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState(true)

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