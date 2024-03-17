import axios from 'axios';
import { api } from '../api';
import { IEquipment } from 'src/types/ICollection';

/**
 * Get stuff
 * @returns The response from the api, which includes the stuff data.
 * @remarks
 * This function returns the stuff data from the api. It also saves the data to local storage and sets a timer to refresh the data. If the data exists in local storage and the timer has not expired, it will return the data from local storage.
 * 
 */

export const getStuff = async () => {
	const stuffTimer = getTimeout();
	if (stuffTimer && new Date().getTime() < stuffTimer) {
		const stuff = stuffExists();
		if (stuff) {
			return JSON.parse(stuff);
		}
	}
	const url = api().stuff().get();

	try {
		const response = await axios.get(`${url}`);
		if (response.status === 200) {
			const refreshTime = new Date().getTime() + 1000 * 60 * 60 * 3;
			saveToLocalStorage('stuff-timer', refreshTime);
			saveToLocalStorage('stuff', response.data);
			return response.data;
		}
	} catch (error) {
		return error;
	}
};

/**
 * @deprecated not implemented in backend.
 */

export const getStuffByType = async (type: string, id: number) => {
	const url = api().stuff().show(type, id);
	try {
		const response = await axios.get(url);
		return response;
	} catch (error) {
		return error;
	}
};

/**
 * Get stuff mp
 * @param {Object} equipment - The equipment data
 * @returns The response from the api, which includes the mp data.
 * 
 */

export const getStuffMp = async (equipment: IEquipment) => {
	const url = api().stuff().mp();

	try {
		const response = await axios.post(url, equipment);
		return response;
	} catch (error) {
		return error;
	}
};


/**
 * Save stuff
 * @param {Object} data - The stuff data
 */
const saveToLocalStorage = (key: string, data: any) => {
	localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Check if stuff exists
 * @returns The stuff data from local storage, if it exists.
 */
const stuffExists = () => {
	const stuff = localStorage.getItem('stuff');
	if (stuff) {
		return stuff;
	}
	return false;
};

/**
 * Get timeout
 * @returns The timeout data from local storage, if it exists.
 */
const getTimeout = () => {
	const stuffTimer = localStorage.getItem('stuff-timer');
	if (stuffTimer) {
		return JSON.parse(stuffTimer);
	}
	return new Date().getTime();
};
