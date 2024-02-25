import iconMail from 'assets/sprites/ui/GV_icon_speaker.png';
import iconTools from 'assets/sprites/ui/GV_icon_preset.png';
import iconContact from 'assets/sprites/ui/GV_icon_mail.png';
import iconArticles from 'assets/sprites/ui/GV_icon_recommend.png';
import { INavigationRoute } from 'types/INavigationRoute';

export const navigationData: INavigationRoute = {
	links: [
		{
			displayText: 'News',
			url: 'news',
			icon: iconMail,
		},
		{
			displayText: 'Articles',
			url: 'articles',
			icon: iconArticles,
		},
		{
			displayText: 'Builder',
			url: 'builder',
			icon: iconTools,
		},
		{
			displayText: 'Contact',
			url: 'contact',
			icon: iconContact,
		},
	],
};
