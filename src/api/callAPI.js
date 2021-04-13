import axios from 'axios';

const baseUrl = 'http://localhost:5000/user';

const API = {
	async createUser(data) {
		return await axios.post(baseUrl, data);
	},
};

export { API };
