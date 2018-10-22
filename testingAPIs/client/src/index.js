import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // this is connected to the index.html and targetting the "root" div it is also how you load components
registerServiceWorker();
