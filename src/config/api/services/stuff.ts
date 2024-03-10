import axios from 'axios';
import { api } from '../api';

export const getStuff = async () => {
	if (existsInLocalStorage('stuff')) {
		return JSON.parse(localStorage.getItem('stuff')!);
	}
	const url = api().stuff().get();

	try {
		const response = await axios.get(`${url}`);
		if (response.status === 200) {
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
