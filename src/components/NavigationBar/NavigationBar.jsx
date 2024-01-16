import { Link } from 'react-router-dom';
import { navigationData } from './navigationData';

const NavigationLink = ({ link }) => {
	return (
		<li className='relative flex mx-[-2px]'>
			<Link
				className='text-center menu-button text-sm flex flex-col items-center  w-20 h-20'
				to={link.url}
			>
				<img
					src={link.icon}
					alt=''
					className='w-10 h-10 m-[-4px]'
				/>
				{link.displayText}
			</Link>
		</li>
	);
};

export const NavigationBar = () => {
	const links = navigationData.links.map((link) => (
		<NavigationLink
			key={link.url}
			link={link}
		/>
	));

	return (
		<>
			<nav className='flex fixed bottom-0 left-0 navigation-background'>
				<ul className='flex mt-[-20px]'>{links}</ul>
			</nav>
		</>
	);
};
