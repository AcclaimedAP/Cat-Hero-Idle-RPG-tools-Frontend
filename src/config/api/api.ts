/**
 * API configuration
 * @returns {Object} - Object with all the API endpoints
 *
 * @remarks
 * This function returns an object with all the API endpoints. It is used to create API fetch functions by providing the base URL and the endpoint.
 *
 * @example
 *
 * const url = api().build().create();
 * // returns 'https://api.example.com/builds/'
 *
 * const url = api().build().get("abc123");
 * // returns 'https://api.example.com/builds/abc123/'
 *
 */
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

	const stuff = () => {
		const get = () => {
			return `${baseUrl}/stuff/`;
		};
		const mp = () => {
			return `${baseUrl}/stuff/mp/`;
		};
		const show = (type: string, id: number) => {
			return `${baseUrl}/stuff/${type}/${id}`;
		};
		return {
			get,
			mp,
			show,
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
		stuff,
		news,
	};
};
