import axios from 'axios';

export const api = () => {
	const baseUrl = import.meta.env.VITE_API_URL;
  console.log('baseUrl', baseUrl);
	const build = () => {
		const create = () => {
			return `${baseUrl}/builds/new/`;
		};
		const get = (id: string) => {
			return `${baseUrl}/builds/data/${id}/`;
		};
		return {
			create,
			get,
		};
	};

	return {
		build,
	};
};
