export interface IGenericContent {
	category: string;
	title: string;
	content: () => JSX.Element;
}
