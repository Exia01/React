import React, { useState } from 'react';

function FormHook() {
  const [email, setEmail] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
  }

  
  return (
    <div>
      <br />
      <input type='email' name='email' onChange={handleChange} />
      <br />
      <p>Value is:{email}</p>
      <button onClick={() => setEmail('')}>Submit</button>
    </div>
  );
}

export default FormHook;
