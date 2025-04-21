import { Outlet } from 'react-router-dom';
import { NavigationBar } from 'components/NavigationBar/NavigationBar';
import { Cookies } from 'react-cookie-consent';
export const Layout = () => {
  const resetCookieConsent = () => {
    Cookies.remove("CookieConsent-legacy");
    Cookies.remove("CookieConsent");
    window.location.reload();
  }
  return (
    <>

      <header id='header'>
        <NavigationBar />
      </header>
      <div className='flex flex-col flex-nowrap justify-between min-h-screen'>
        <main className='py-6 md:p-12 flex flex-row justify-center w-full'>
          <div className='max-w-[1090px] w-full overflow-x-hidden md:overflow-x-visible'>
            <Outlet></Outlet>
          </div>
        </main>
        <footer className='md:px-12 mb-[120px] flex flex-row justify-center w-full'>
          <div className='max-w-[1090px] '>
            <div className='container-dark text-xs  overflow-x-hidden md:overflow-x-visible'>
              <p className='px-12 py-4'>
                {/*The site uses cookies to log the amount of traffic, however because of the technical limitations of GitHub Pages, I am limited to using things like Google Analytics to get this type of statistics. Even with all types of options turned off, some data will be collected if you accepted the cookies. If you choose to change your choice, please click here: <button className='hover:drop-shadow-md underline'
                onClick={() => resetCookieConsent()}
              >Reset cookies</button>. Please note this refreshes the page. Ensure you have saved any build you are working on.*/}
                The site uses PostHog to track website usage. The data it collects is fully anonymous and cannot be used to identify you. It only logs the page the user visits, with no additional information. If you have any questions or concerns, please react out to me on Discord.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <div className='background-image'>
        <div className='background-image-front'></div>
        <div className='background-image-front-two'></div>
      </div>

    </>
  );
};
