/**
 *
 * @param type
 * @returns The data from local storage based on the type
 *
 * @remarks
 * This function returns the game data from local storage based on the type.
 *
 * @example
 * const data = getData('companions');
 * // returns companions data as an array, if it exists.
 * // If there is no data in localstorage, it will return [].
 *
 */
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
