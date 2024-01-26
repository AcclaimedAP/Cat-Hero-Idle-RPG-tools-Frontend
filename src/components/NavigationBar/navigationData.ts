import iconMail from 'assets/sprites/ui/GV_icon_speaker.png';
import iconTools from 'assets/sprites/ui/GV_icon_preset.png';
import { INavigationRoute } from 'types/INavigationRoute';

export const navigationData: INavigationRoute = {
	links: [
		{
			displayText: 'News',
			url: 'news',
			icon: iconMail,
		},
		{
			displayText: 'Builds',
			url: 'builds',
			icon: iconTools,
		},
		{
			displayText: 'Tips & Tricks',
			url: 'tips-tricks',
			icon: iconTools,
		},
		{
			displayText: 'Tools',
			url: 'tools',
			icon: iconTools,
		},
		{
			displayText: 'Contact',
			url: 'contact',
			icon: iconTools,
		},
	],
};
