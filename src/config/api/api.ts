import axios from 'axios';

export const api = () => {
	const baseUrl = import.meta.env.VITE_API_URL;

	const build = () => {
		const create = () => {
			return `${baseUrl}/builds/new/`;
		};
		const get = (id: string) => {
			return `${baseUrl}/builds/${id}/`;
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
