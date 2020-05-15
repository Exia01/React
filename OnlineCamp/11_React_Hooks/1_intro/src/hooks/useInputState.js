import { useState } from 'react';

// Declaring an unnamed func
export default (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  //   returning vals as Arr, can also use obj
  return [value, handleChange, reset];
};
