import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';

export const Layout = () => {
	return (
		<>
			<header>
				<NavigationBar />
			</header>
			<main>
				<Outlet></Outlet>
			</main>
			<footer></footer>
		</>
	);
};
