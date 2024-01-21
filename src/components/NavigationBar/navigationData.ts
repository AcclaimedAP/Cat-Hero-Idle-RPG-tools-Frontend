import iconMail from 'assets/sprites/ui/GV_icon_speaker.png';
import iconFace from 'assets/sprites/ui/GV_icon_main_2.png';
import { INavigationRoute } from 'types/INavigationRoute';

export const navigationData: INavigationRoute = {
	links: [
		{
			displayText: 'News',
			url: 'news',
			icon: iconMail,
		},
		{
			displayText: 'Game Data',
			url: 'game-data',
			icon: iconFace,
		},
	],
};
