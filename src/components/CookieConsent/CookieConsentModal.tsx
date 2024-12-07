import CookieConsent from "react-cookie-consent";
import { Cookies } from "react-cookie-consent";
import ReactGA from "react-ga4";
import React from "react";

interface GAConfig {
  measurementId: string;
}

const GA_CONFIG: GAConfig = {
  measurementId: 'G-G3RW12Z9JR'
};

const setTrackingCookies = () => {
  Cookies.set("CookieConsent", "true", { expires: 365 });
  initializeGA();
};

const initializeGA = () => {
  ReactGA.initialize(GA_CONFIG.measurementId);
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
};

export const CookieConsentModal = () => {
  React.useEffect(() => {
    const hasConsent = Cookies.get("CookieConsent") === "true";
    if (hasConsent) {
      initializeGA();
    }
  }, []);

  return (
    <CookieConsent
      style={{
        alignItems: "center",
        padding: "2rem",
        paddingLeft: "6rem",
        paddingRight: "6rem"
      }}
      enableDeclineButton
      onAccept={setTrackingCookies}
      buttonText="Accept"
      buttonStyle={{ backgroundColor: "#009785", color: "white" }}
      declineButtonText="Reject"
      declineButtonStyle={{ backgroundColor: "#FFC749", color: "#000000" }}
      expires={365}
    >
      This site uses Google Analytics to track traffic. While it has the lowest amount of tracking
      possible, some data will be collected as a result. By clicking accept, you agree to the use
      of cookies. The analytics are used to make educated decisions on the future development of
      the site. If you wish to reject the cookies, please click reject.
    </CookieConsent>
  );
};