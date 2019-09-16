import api from './api';

export const getPokemons = (page) => {
    return api.get(`/pokemon/?offset=${page}&limit=20`)
        .then(res => res.data)
        .then(res => res)
}

export const getPokemonsWithParams = (page) => {
    return api.get(`/pokemon/?offset=${page}&limit=20`)
        .then(res => res.data)
        .then(res => res)
}