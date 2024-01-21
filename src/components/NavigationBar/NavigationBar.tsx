import { Link } from 'react-router-dom';
import { navigationData } from './navigationData';
import { ILinkRoute } from 'types/INavigationRoute';

const NavigationLink = ({ link }: { link: ILinkRoute }) => {
	return (
		<li className='relative flex mx-[-2px]'>
			<Link
				className='text-center menu-button text-sm flex flex-col items-center  w-20 h-20 text-outline'
				to={link.url}
			>
				{link.icon && (
					<img
						src={link.icon}
						alt=''
						className='w-10 h-10 m-[-4px]'
					/>
				)}
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
			<nav className='flex fixed bottom-0 left-0 navigation-background z-50'>
				<ul className='flex mt-[-20px]'>{links}</ul>
			</nav>
		</>
	);
};
