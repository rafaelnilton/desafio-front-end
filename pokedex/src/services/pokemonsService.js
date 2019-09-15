import api from './api';

export const getPokemons = () => {
    return api.get('/products')
        .then(res => res.data)
        .then(res => res)
}