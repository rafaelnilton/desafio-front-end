import axios from 'axios';

export const baseURL = "";

const api = axios.create({
    baseURL: baseURL + "/api"
})

export default api;