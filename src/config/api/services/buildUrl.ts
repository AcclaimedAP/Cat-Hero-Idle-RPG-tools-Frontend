import axios from 'axios';
import { api } from '../api';

export const saveBuild = async (data: any) => {
	const url = api().build().create();
	try {
		const response = await axios.post(url, data);
		return response;
	} catch (error) {
		return error;
	}
};

export const getBuild = async (id: string) => {
	const url = api().build().get(id);
	try {
		const response = await axios.get(url);
		return response;
	} catch (error) {
		return error;
	}
};
