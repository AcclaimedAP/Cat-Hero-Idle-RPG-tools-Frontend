import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router/router';
import { CookieConsentModal } from './components/CookieConsent/CookieConsentModal';
function App() {

  return (
    <>
      <CookieConsentModal></CookieConsentModal>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
