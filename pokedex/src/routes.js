import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from './pages/main';
import PokemonView from './pages/PokemonView';
import PokedexView from './pages/PokedexView';

const NavStack = createStackNavigator({
    Main: {
        screen: Main
    },
    PokemonView: {
        screen: PokemonView
    },
    Pokedex: {
        screen: PokedexView
    }
})



const App =  createAppContainer(
    NavStack
);

export default App;

