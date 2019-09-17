import api from './api';

export const getPokemons = (page) => {
    return api.get(`/pokemon/?offset=${page}&limit=20`)
        .then(res => res.data)
        .then(res => res)
}

export const getPokemonsById = (id) => {
    return api.get(`/pokemon/${id}`)
        .then(res => res.data)
        .then(res => res)
}