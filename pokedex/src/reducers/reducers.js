import { combineReducers } from 'redux';
import {
  ADD_POKEMON_POKEDEX,
  REMOVE_POKEMON_POKEDEX
} from '../constants';

const initialState = {
  pokedex: []
}

const pokedexReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_POKEMON_POKEDEX:
        return { ...state, pokedex:[...pokedex, action.pokemon]};
    case REMOVE_POKEMON_POKEDEX:
        return {...state, pokedex:[...pokedex, action.pokemon]};
    default:
      return state;
  }
}


export default combineReducers({
  pokedex: pokedexReducer,
})