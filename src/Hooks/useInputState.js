import { useState } from 'react';

export const useInputState = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const handleOnChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  return [value, handleOnChange];
};
