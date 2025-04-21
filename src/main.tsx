import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/cat-hero-styles.css';
import { store } from 'src/config/redux/store'
import { Provider } from 'react-redux'
import { PostHogProvider } from 'posthog-js/react'
import { PostHogConfig } from 'posthog-js';
const options: Partial<PostHogConfig> = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  persistence: 'memory'
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement || document.createElement('div')).render(
  <React.StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={options}>
      <Provider store={store}>
        <App />
      </Provider>
    </PostHogProvider>
  </React.StrictMode>,
)
