import { Link } from 'react-router-dom';

export const NavigationBar = () => {
	return (
		<>
			<nav>
				<ul>
					<Link to='/'>Home</Link>
				</ul>
			</nav>
		</>
	);
};
