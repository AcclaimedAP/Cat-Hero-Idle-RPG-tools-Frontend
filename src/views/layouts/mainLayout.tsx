import { Outlet } from 'react-router-dom';
import { NavigationBar } from 'components/NavigationBar/NavigationBar';

export const Layout = () => {
	return (
		<>
			<header>
				<NavigationBar />
			</header>
      <main className='py-6 md:p-12'>
				<Outlet></Outlet>
			</main>
      <footer className='md:px-12 mb-[120px]'></footer>
			<div className='background-image'>
				<div className='background-image-front'></div>
				<div className='background-image-front-two'></div>
			</div>
		</>
	);
};
