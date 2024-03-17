/**
 * Interface for News
 * @interface INews
 * @param {string} slug - The slug of the news, this is what will be used in the URL
 * @param {string} title - The title of the news
 * @param {string} body - The body of the news
 * @param {string} created_at - The created date of the news
 * @param {string} updated_at - The updated date of the news
 * @param {string} type - The type of the news
 * @param {string} author - The author of the news
 *
 */

export interface INews {
	slug: string;
	title: string;
	body: string;
	created_at: string;
	updated_at: string;
	type: string;
	author: string;
}

/**
 * Interface for NewsData, this is the main object returned for the overview and returns pagination data as well.
 * @interface INewsData
 * @param {INews[]} data - The news data
 * @param {object} pagination_data - The pagination data
 * @param {number} pagination_data.current_page - The current page of the news
 * @param {number} pagination_data.per_page - The amount of news per page
 * @param {number} pagination_data.total_pages - The total amount of pages
 * @param {string} type - The type of the news
 *
 */
export interface INewsData {
	data: INews[];
	pagination_data: {
		current_page: number;
		per_page: number;
		total_pages: number;
	};
	type: string;
}
