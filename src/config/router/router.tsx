import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { Layout } from 'views/layouts/mainLayout';
import { NotFound } from 'views/NotFound/NotFound';
import { Home } from 'views/Home/Home';
import { Tools } from 'views/Tools/Tools';
import { GameData } from 'views/GameData/GameData';
import { SkillsOverview } from 'views/GameData/Skills/SkillsOverview';
import { CompanionsOverview } from 'views/GameData/Companions/CompanionsOverview';
import { RunesOverview } from 'views/GameData/Runes/RunesOverview';
import { CollectionDisplay } from 'views/Tools/CollectionDisplay/CollectionDisplay';
import { Builds } from 'views/Builds/Builds';
import { TipsTricks } from 'views/TipsTricks/TipsTricks';
import { Contact } from 'src/views/Contact/Contact';



const routes = [
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
				path: '/news',
				element: <Home></Home>,
				index: true,
			},
			{
				path: 'tools',
				element: <Tools></Tools>,
				children: [],
      },
      {
        path: 'tools',
        children: [
          {
            path: 'collection-display',
            element: <CollectionDisplay></CollectionDisplay>,
            children: [],
          }
        ]
      },
			{
				path: 'game-data',
				element: <GameData></GameData>,
				children: [],
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
        path: 'builds/:buildName',
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
        path: 'tips-tricks/:category/:article',
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