import axios from 'axios';
import { api } from '../api';

export const getStuff = async () => {
  const stuffTimer = localStorage.getItem('stuff-timer');
	if (stuffTimer && new Date().getTime() < JSON.parse(stuffTimer)) {
		return JSON.parse(localStorage.getItem('stuff')!);
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

const saveToLocalStorage = (key: string, data: any) => {
	localStorage.setItem(key, JSON.stringify(data));
};

const existsInLocalStorage = (key: string) => {
	return localStorage.getItem(key) !== null;
};
