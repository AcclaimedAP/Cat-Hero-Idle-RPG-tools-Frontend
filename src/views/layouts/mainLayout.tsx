import { Outlet } from 'react-router-dom';
import { NavigationBar } from 'components/NavigationBar/NavigationBar';
import Buymeacoffee from './buymecoffee';

export const Layout = () => {

  return (
    <>
      <header id='header'>
        <NavigationBar />
        <Buymeacoffee />
      </header>
      <main className='py-6 md:p-12 flex flex-row justify-center w-full'>
        <div className='max-w-[1090px] w-full overflow-x-hidden md:overflow-x-visible'>
          <Outlet></Outlet>
        </div>
      </main>
      <footer className='md:px-12 mb-[120px]'></footer>
      <div className='background-image'>
        <div className='background-image-front'></div>
        <div className='background-image-front-two'></div>
      </div>
    </>
  );
};
