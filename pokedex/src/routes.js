import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import PokemonView from './pages/PokemonView';

const NavStack = createStackNavigator({
    Main: {
        screen: Main
    },
    PokemonView: {
        screen: PokemonView
    }
})

const App = createAppContainer(NavStack);

export default App;