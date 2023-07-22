import axios from 'axios';
export const url = "https://jsonplaceholder.typicode.com"
export const API = axios.create({baseURL: url});
// Alter defaults after instance has been created
export const setAuthToken = (token) => {
	if (token) {
		API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete API.defaults.headers.common['Authorization'];
	}
};
export const config = {
	headers: {
		'Content-Type': 'application/json'
	}
};