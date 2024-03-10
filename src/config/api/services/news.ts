import axios from 'axios';
import { api } from '../api';

export const getNews = async (query: any) => {
	const url = api().news().get();
	try {
    const response = await axios.get(`${url}?page=${query.page}&per_page=${query.per_page}${query.hasOwnProperty('type') ? `&type=${query.type}` : ''}`);
		console.log(response);
		return response;
	} catch (error) {
		return error;
	}
};

export const getNewsBySlug = async (slug: string) => {
	const url = api().news().show(slug);
	try {
		const response = await axios.get(url);
		return response;
	} catch (error) {
		return error;
	}
};
