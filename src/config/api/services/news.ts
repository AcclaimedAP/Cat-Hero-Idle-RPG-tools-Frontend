import axios from 'axios';
import { api } from '../api';

/**
 * Get news
 * @param {Object} query - The query parameters
 * @returns The response from the api, which includes paginated news data.
 * 
 * @example
 * 
 * const news = getNews({ page: 1, per_page: 10, type: 'website-news'});
 * // returns paginated news data which has a page of 1, per_page of 10, and type of 'website-news'
 * 
 */
export const getNews = async (query: any) => {
	const url = api().news().get();
	try {
    const response = await axios.get(`${url}?page=${query.page}&per_page=${query.per_page}${query.hasOwnProperty('type') ? `&type=${query.type}` : ''}`);
		return response;
	} catch (error) {
		return error;
	}
};

/**
 * Get news by slug
 * @param {string} slug - The slug of the news
 * @returns The response from the api, which includes the news data.
 * 
 */

export const getNewsBySlug = async (slug: string) => {
	const url = api().news().show(slug);
	try {
		const response = await axios.get(url);
		return response;
	} catch (error) {
		return error;
	}
};
