import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';

const NavStack = createStackNavigator({
    Main: {
        screen: Main
    }
})

const App = createAppContainer(NavStack);

export default App;