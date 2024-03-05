import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Stopwatch from './Stopwatch.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Stopwatch />
  </React.StrictMode>
);
