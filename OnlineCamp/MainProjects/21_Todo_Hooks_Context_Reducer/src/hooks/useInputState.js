import { useState } from "react";

// Creating an exporting an unnamed Function
export default initialVal => {
  const [value, setValue] = useState(initialVal);

  const handleChange = e => {
    setValue(e.target.value);
  };
  
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
