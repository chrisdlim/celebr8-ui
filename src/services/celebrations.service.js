import axios from 'axios';

export default {
	getCelebrations() {
    return axios.get('http://localhost:3000/celebrations');
	}
}