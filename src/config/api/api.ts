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
