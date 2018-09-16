import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/* This will target the div on the index.html that is located on the public folder */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker(); /* This register worker essentially caches the application?   ...I think */
