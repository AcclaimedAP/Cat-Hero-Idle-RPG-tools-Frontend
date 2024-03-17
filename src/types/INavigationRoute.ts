/**
 * Interface for the navigation route
 * @interface ILinkRoute
 * @param {string} displayText - The display text of the link
 * @param {string} url - The url of the link
 * @param {string} icon - The icon of the link
 */
export interface ILinkRoute {
	displayText: string;
	url: string;
	icon?: string;
}
/**
 * Interface for the navigation route
 * @interface INavigationRoute
 * @param {ILinkRoute[]} links - The links of the navigation route
 */
export interface INavigationRoute {
	links: ILinkRoute[];
}
