import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/baseURL';


export const callApi = (endpoint, method = "get", data = null) => {
    return axios({
        method,
        url: `${BASE_URL}/${endpoint}/${API_KEY}`,
        data,
        headers: {
            "Content-Type" : "application/json",
        }
    });
}