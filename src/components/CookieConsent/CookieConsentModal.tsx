// @ts-nocheck
// imports a ready-made React component to serve as your cookie banner
import CookieConsent, { Cookies } from "react-cookie-consent";// implementation & configuration of cookie consent banner
import ReactGA from "react-ga";
//import Cookies from "js-cookie";


const setTrackingCookies = () => {
  Cookies.set("CookieConsent", "true");
  Cookies.set("CookieConsent-legacy", "true");
  ReactGA.initialize("G-G3RW12Z9JR");
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const CookieConsentModal = () => {


  return (
    <>
      <CookieConsent
        style={{ alignItems: "center", padding: "2rem", paddingLeft: "6rem", paddingRight: "6rem" }}
        enableDeclineButton
        onAccept={() => [setTrackingCookies()]}
        //debug={import.meta.env.VITE_ENV === "dev"}
        //onDecline={() => { this.showModal("cookieModalShow"); }}
        buttonText="Accept"
        buttonStyle={{ backgroundColor: "#009785", color: "white" }}
        declineButtonText="Reject"
        declineButtonStyle={{ backgroundColor: "#FFC749", color: "#000000" }}
      >
        This site uses Google Analytics to track traffic. While it has the lowest amount of tracking possible, some data will be collected as a result. By clicking accept, you agree to the use of cookies. The analytics are used to make educated decisions on the future development of the site. If you wish to reject the cookies, please click reject.
      </CookieConsent>
    </>
  )
}