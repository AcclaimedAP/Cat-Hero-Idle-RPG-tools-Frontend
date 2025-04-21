import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router/router';
// import { CookieConsentModal } from './components/CookieConsent/CookieConsentModal';
// import { useEffect } from 'react';
// import ReactGA from 'react-ga4';
// import { Cookies } from "react-cookie-consent";

function App() {
  /*
  useEffect(() => {
    // Track route changes
    router.subscribe((state) => {
      if (Cookies.get("CookieConsent") === "true") {
        ReactGA.send({
          hitType: "pageview",
          page: state.location.pathname + state.location.search
        });
      }
    });
  }, []);
*/
  return (
    <>
      {/*<CookieConsentModal />*/}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
