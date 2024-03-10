import axios from 'axios';
import { api } from '../api';

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

export const getStuffByType = async (type: string, id: number) => {
	const url = api().stuff().show(type, id);
	try {
		const response = await axios.get(url);
		return response;
	} catch (error) {
		return error;
	}
};

export const getStuffMp = async (buildString: string) => {
	const url = api().stuff().mp(buildString);
	try {
		const response = await axios.get(url);
		return response;
	} catch (error) {
		return error;
	}
};

const saveToLocalStorage = (key: string, data: any) => {
	localStorage.setItem(key, JSON.stringify(data));
};

const stuffExists = () => {
	const stuff = localStorage.getItem('stuff');
	if (stuff) {
		return stuff;
	}
	return false;
};

const getTimeout = () => {
	const stuffTimer = localStorage.getItem('stuff-timer');
	if (stuffTimer) {
		return JSON.parse(stuffTimer);
	}
	return new Date().getTime();
};
