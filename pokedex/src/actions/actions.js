import {
    ADD_POKEMON_POKEDEX,
    REMOVE_POKEMON_POKEDEX
} from '../constants';
// import Snackbar from 'react-native-snackbar';    


export const addPokemon = (pokemon) => (dispatch) => {
    dispatch({type: ADD_POKEMON_POKEDEX, pokemon: pokemon});
}

export const removePokemon = (pokemon) => (dispatch) => {
    dispatch({type: REMOVE_POKEMON_POKEDEX, pokemon: pokemon});
}