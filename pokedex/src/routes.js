import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';

const NavStack = createStackNavigator({
    Main: {
        screen: Main
    }
})

const App = createAppContainer(NavStack);

export default App;