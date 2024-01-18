import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/cat-hero-styles.css';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement || document.createElement('div')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
