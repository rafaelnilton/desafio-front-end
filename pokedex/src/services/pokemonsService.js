import api from './api';

export const getPokemons = (page) => {
    return api.get(`/products?page=${page}`)
        .then(res => res.data)
        .then(res => res)
}