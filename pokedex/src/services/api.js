import axios from 'axios';

export const url = "https://pokeapi.co/api/v2/";

const api = axios.create({
    baseURL: url
})

export default api;