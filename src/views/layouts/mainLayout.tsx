import { Outlet } from 'react-router-dom';
import { NavigationBar } from 'components/NavigationBar/NavigationBar';
export const Layout = () => {
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
