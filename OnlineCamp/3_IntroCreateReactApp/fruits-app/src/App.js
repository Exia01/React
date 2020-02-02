import React from 'react';
import './App.css';

import helper from "./utils/helper"
import foods from './utils/foods'
import Message from './containers/Message';
function App() {


  return (
    <div className="App">
    <Message food={helper.choice(foods())} ></Message>
    <Message food={helper.remove(foods(), "Tacos")} ></Message>
    </div>
  );
}

export default App; //when file is called, app will be exported
