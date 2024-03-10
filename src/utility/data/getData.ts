export const getData = (type: string) => {
	const data: any = localStorage.getItem('stuff');
	if (data !== null) {
		const parsedData = JSON.parse(data);
		if (parsedData.hasOwnProperty(type)) {
			return parsedData[type];
		}
	}
	return [];
};
