import React from 'react';

// import Custom hook
import useInputState from './hooks/useInputState';

function SimpleFormInputHook() {
  const [email, setEmail, resetEmail] = useInputState('')
  const [password, setPassword, resetPassword] = useInputState('')
  return (
    <div>
      <br />
      <input type='email' name='email' value={email} onChange={setEmail} />
      <br />
      <p>Value email:{email}</p>
      <br />
      <input type='password' name='password' value={password} onChange={setPassword} />
      <br />
      <p>Value is pass:{`${password}`}</p>
      <button onClick={resetEmail}>Submit</button>
      <button onClick={resetPassword}>Password</button>
    </div>
  );
}

export default SimpleFormInputHook;
