import React, { createContext, useState } from 'react';

export const LanguageContext = createContext(); //creating context

export function LanguageProvider(props) {
  // passing init val
  const [language, setLanguage] = useState('spanish'); //provides the getter and setter per say

  // shorthand passing event and fire setLanguage
  const changeLanguage = (e) => setLanguage(e.target.value); //passing the event target value
  return (
    // passing obj and func ref
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
