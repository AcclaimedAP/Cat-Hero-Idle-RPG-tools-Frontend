import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { Layout } from 'views/layouts/mainLayout';
import { NotFound } from 'views/NotFound/NotFound';
import { Builder } from 'src/views/Builder/Builder';
import { Builds } from 'views/Builds/Builds';
import { Articles } from 'src/views/Articles/Articles';
import { Contact } from 'src/views/Contact/Contact';
import { News } from 'src/views/News/News';
import { NewsView } from 'src/views/News/NewsView';

/**
 * The routes for the application
 * @const routes
 * @type {object[]}
 * @description The routes for the application
 * @example
 * const routes = [ // Array of routes
 * {
 *  path: '/',                            // The path of the root route
 *  element: <Layout></Layout>,           // The layout of the route
 *  errorElement: <NotFound></NotFound>,  // The error element of the route
 *  children: [                           // The children of the route               
 *    {
 *      path: '/news',                    // The path of the child route             
 *      element: <News></News>,           // The element of the child route, which is rendered inside of the parent element.
 *      index: true,                      // The index of the child route, specifies if the route is the index route, omitting this will make the route not the index route.
 *    },
 *    {
 *      ...
 *    }
 *  ]
 */

const routes = [
	{
		path: '/',
		element: <Layout></Layout>,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				path: '/',
        element: <News></News>,
				index: true,
			},
			{
				path: '/news',
        element: <News></News>,
        children: []
      },
      {
        path: '/news/:type',
        element: <News></News>,
        children: []
      },
      {
        path: '/news/:type/:slug',
        element: <NewsView></NewsView>,
        children: []
			},
			{
        path: '/builder',
        element: <Builder></Builder>,
        children: []
      },
      {
        path: 'builds',
        element: <Builds></Builds>,
        children: [],
      },
      {
        path: 'builds/:category',
        element: <Builds></Builds>,
        children: [],
      },
      {
        path: 'builds/:category/:content',
        element: <Builds></Builds>,
        children: [],
      },
      {
        path: 'articles',
        element: <Articles></Articles>,
        children: [],
      },
      {
        path: 'articles/:category',
        element: <Articles></Articles>,
        children: [],
      },
      {
        path: 'articles/:category/:content',
        element: <Articles></Articles>,
        children: [],
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
        children: [],
      }
		],
	},
];


export const router = createHashRouter(routes) //: createBrowserRouter(routes);