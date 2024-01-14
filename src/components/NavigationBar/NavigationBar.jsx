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
				className='p-2 hover:bg-primary w-32 text-center'
				to={link.url}
			>
				{link.displayText}
			</Link>
			{link.children && showSubmenu && (
				<ul className='absolute top-full bg-secondary w-full'>
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
			<nav className='flex bg-secondary'>
				<ul className='flex gap-2'>{links}</ul>
			</nav>
		</>
	);
};
