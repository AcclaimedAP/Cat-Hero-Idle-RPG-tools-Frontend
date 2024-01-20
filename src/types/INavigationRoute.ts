export interface ILinkRoute {
	displayText: string;
	url: string;
	icon?: string;
}
export interface INavigationRoute {
	links: ILinkRoute[];
}
