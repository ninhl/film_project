import axios from 'axios';
import { BASE_URL_MOVIE, API_KEY, BASE_URL_PERSON } from '../constants/baseURL';
interface callApiMovies{
    endpoint?: string;
    method?: string;
    data?: any;
    page?: number;
}

export const callApiMovie = (endpoint?: string , method: string = "get", data: any = null, page: number = 1)  => {
    return axios({
        method,
        url: `${BASE_URL_MOVIE}/${endpoint}?api_key=${API_KEY}&page=${page}`,
        data,
        headers: {
            "Content-Type" : "application/json",
        }
    });
}
export const callApiPerson = (endpoint: string, method = "get", data = null) => {
    return axios({
        method,
        url: `${BASE_URL_PERSON}/${endpoint}?api_key=${API_KEY}`,
        data,
        headers: {
            "Content-Type" : "application/json",
        }
    });
}

