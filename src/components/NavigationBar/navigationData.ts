import iconMail from 'assets/sprites/ui/GV_icon_speaker.png';
import iconTools from 'assets/sprites/ui/GV_icon_preset.png';
import iconContact from 'assets/sprites/ui/GV_icon_mail.png';
import iconTipsTricks from 'assets/sprites/ui/GV_icon_recommend.png';
import iconBuilds from 'assets/sprites/ui/GV_icon_main_2.png';
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
			icon: iconBuilds,
		},
		{
			displayText: 'Tips & Tricks',
			url: 'tips-tricks',
			icon: iconTipsTricks,
		},
		{
			displayText: 'Tools',
			url: 'tools',
			icon: iconTools,
		},
		{
			displayText: 'Contact',
			url: 'contact',
			icon: iconContact,
		},
	],
};
