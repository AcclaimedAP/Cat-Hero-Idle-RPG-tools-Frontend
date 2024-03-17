import axios from 'axios';
import { api } from '../api';

/**
 * Save a build
 * @param {Object} data - The build data
 * @returns The response from the api, which includes the build id.
 * 
 */
export const saveBuild = async (data: any) => {

	const url = api().build().create();
	try {
		const response = await axios.post(url, data);
		return response;
	} catch (error) {
		return error;
	}
};

/**
 * Get a build
 * @param {string} id - The id of the build
 * @returns The response from the api, which includes the build data.
 * 
 */

export const getBuild = async (id: string) => {
	const url = api().build().get(id);
	try {
		const response = await axios.get(url);
		return response;
	} catch (error) {
		return error;
	}
};
