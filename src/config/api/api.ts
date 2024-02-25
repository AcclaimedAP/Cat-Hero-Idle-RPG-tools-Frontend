import axios from 'axios';

export const api = () => {
	const baseUrl = import.meta.env.VITE_API_URL;
	const build = () => {
		const create = () => {
			return `${baseUrl}/builds/`;
		};
		const get = (id: string) => {
			return `${baseUrl}/builds/${id}/`;
		};
		return {
			create,
			get,
		};
	};
	const news = () => {
		const get = () => {
			return `${baseUrl}/news/`;
		};
		const show = (slug: string) => {
			return `${baseUrl}/news/${slug}`;
		};
		return {
			get,
			show,
		};
	};

	return {
		build,
		news,
	};
};
