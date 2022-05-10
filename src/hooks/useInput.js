import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const onChange = e => setValue(e.target.value)

  const cleareValue = () => setValue(initialValue)

  return {
    value, onChange, cleareValue
  }
}

export { useInput }