import Axios, { AxiosError } from 'axios';
import url from './url';

const HttpClient = Axios.create({
    baseURL: url
});

// Request interceptors
HttpClient.interceptors.request.use(async(config) => {
    // get the token
    const token = await localStorage.getItem('token');
    if (token !== null) {
        config.headers['authorization'] = `Bearer ${token}`;
        return config;
    }
    return config;
}, (error) => {
    Promise.reject(error.message);
});

// Response Interceptors
HttpClient.interceptors.response.use((config) => {
    if (config.status === 200 || config.status === 201) {
        return config.data.message || 'Request Successful';
    }
    if (config.status === 403 || config.status === 401) {
        return config.data.message || 'Not Authorzied';
    }
}, (error: AxiosError<any, any>) => {
    Promise.reject(error.response?.data.message || 'An error occured')
})

export default HttpClient;
