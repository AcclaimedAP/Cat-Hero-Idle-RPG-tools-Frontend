export interface INews {
	slug: string;
	title: string;
	body: string;
	created_at: string;
	updated_at: string;
	type: string;
	author: string;
}
export interface INewsData {
	data: INews[];
	pagination_data: {
		current_page: number;
		per_page: number;
		total_pages: number;
	};
	type: string;
}
