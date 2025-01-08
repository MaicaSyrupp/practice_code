import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App';

// Create a root and render the App component using createRoot
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot from 'react-dom/client'
root.render(<App />);