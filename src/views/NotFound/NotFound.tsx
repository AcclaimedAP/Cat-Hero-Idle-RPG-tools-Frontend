import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div>
			<h1>Not Found</h1>
			<Link to='/'>Go Home</Link>
		</div>
	);
};
