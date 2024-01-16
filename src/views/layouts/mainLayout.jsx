import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';

export const Layout = () => {
	return (
		<>
			<header>
				<NavigationBar />
			</header>
			<main className='p-12 mb-[60px]'>
				<Outlet></Outlet>
			</main>
			<footer></footer>
			<div className='background-image'>
				<div className='background-image-front'></div>
				<div className='background-image-front-two'></div>
			</div>
		</>
	);
};
