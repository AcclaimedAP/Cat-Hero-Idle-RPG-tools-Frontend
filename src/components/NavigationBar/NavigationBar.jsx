import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as navigationData from './navigationData.json';

const NavigationLink = ({ link }) => {
	const [showSubmenu, setShowSubmenu] = useState(false);

	return (
		<li
			className='relative flex'
			onMouseEnter={() => setShowSubmenu(true)}
			onMouseLeave={() => setShowSubmenu(false)}
		>
			<Link
				className='text-center menu-button'
				to={link.url}
			>
				{link.displayText}
			</Link>
			{link.children && showSubmenu && (
				<ul className='absolute left-0 bottom-full w-full z-10'>
					{link.children.map((child) => (
						<NavigationLink
							key={child.url}
							link={child}
						/>
					))}
				</ul>
			)}
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
			<nav className='flex fixed bottom-0 left-0'>
				<ul className='flex'>{links}</ul>
			</nav>
		</>
	);
};
