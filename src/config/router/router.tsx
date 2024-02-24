import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { Layout } from 'views/layouts/mainLayout';
import { NotFound } from 'views/NotFound/NotFound';
import { Home } from 'views/Home/Home';
import { Builder } from 'src/views/Builder/Builder';
import { GameData } from 'views/GameData/GameData';
import { SkillsOverview } from 'views/GameData/Skills/SkillsOverview';
import { CompanionsOverview } from 'views/GameData/Companions/CompanionsOverview';
import { RunesOverview } from 'views/GameData/Runes/RunesOverview';
import { Builds } from 'views/Builds/Builds';
import { TipsTricks } from 'views/TipsTricks/TipsTricks';
import { Contact } from 'src/views/Contact/Contact';
import { News } from 'src/views/News/News';



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
        path: '/news/:type/:content',
        element: <News></News>,
        children: []
			},
			{
        path: '/builder',
        element: <Builder></Builder>,
        children: []
      },
			{
				path: 'game-data',
				element: <GameData></GameData>,
        children: []
			},
			{
				path: 'game-data',
				children: [
					{
						path: 'skills',
						element: <SkillsOverview></SkillsOverview>,
						children: [],
					},
					{
						path: 'companions',
						element: <CompanionsOverview></CompanionsOverview>,
						children: [],
          },
          {
            path: 'runes',
            element: <RunesOverview></RunesOverview>,
            children: [],
          }
				],
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
        path: 'tips-tricks',
        element: <TipsTricks></TipsTricks>,
        children: [],
      },
      {
        path: 'tips-tricks/:category',
        element: <TipsTricks></TipsTricks>,
        children: [],
      },
      {
        path: 'tips-tricks/:category/:content',
        element: <TipsTricks></TipsTricks>,
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