import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../views/layouts/mainLayout';
import { NotFound } from '../../views/NotFound/NotFound';
import { Home } from '../../views/Home/Home';
import { Tools } from '../../views/Tools/Tools';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout></Layout>,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
				index: true,
			},
			{
				path: 'tools',
				element: <Tools></Tools>,
				children: [],
			},
		],
	},
]);
