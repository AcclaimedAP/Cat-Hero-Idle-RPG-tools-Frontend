import { Link, useLocation } from 'react-router-dom';
import { ILinkRoute, INavigationRoute } from 'types/INavigationRoute';

const NavigationLink = ({ link }: { link: ILinkRoute }) => {
	const location = useLocation();
	const isActive = location.pathname === link.url;
  const activeClass = isActive ? 'h-14 sub-menu-button-active bottom-[6px]' : 'h-12 bottom-[-2px]';
	return (
		<li className='relative flex mx-[-4px]'>
			<Link
        className={`${activeClass} relative text-center sub-menu-button text-sm flex flex-col items-center  w-20 text-outline`}
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

export const SubNavigationBar = ({ navigationData }: { navigationData: INavigationRoute }) => {
	const links =
		navigationData &&
		navigationData.links.map((link) => (
			<NavigationLink
				key={link.url}
				link={link}
			/>
		));

	return (
		<>
			<nav className='flex mb-[-19px] px-2'>
				<ul className='flex mt-[-20px]'>{links}</ul>
			</nav>
		</>
	);
};
