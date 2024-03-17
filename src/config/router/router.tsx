import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { Layout } from 'views/layouts/mainLayout';
import { NotFound } from 'views/NotFound/NotFound';
import { Builder } from 'src/views/Builder/Builder';
import { Builds } from 'views/Builds/Builds';
import { Articles } from 'src/views/Articles/Articles';
import { Contact } from 'src/views/Contact/Contact';
import { News } from 'src/views/News/News';
import { NewsView } from 'src/views/News/NewsView';



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