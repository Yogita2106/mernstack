import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Yeh line HTML ki 'root' id ko target karti hai [cite: 32]
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);