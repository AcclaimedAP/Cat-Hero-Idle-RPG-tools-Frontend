import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/cat-hero-styles.css';
import { store } from 'src/config/redux/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement || document.createElement('div')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
