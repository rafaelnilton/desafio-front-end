import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getPokemons} from "../services/pokemonsService";

export default class Main extends Component {

    static navigationOptions = {
        title: "Página Inicial",
        headerStyle: {
            backgroundColor: '#DA552F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }


    componentDidMount() {
        this.loadPokemons()
    }

    loadPokemons = async () => {
        const response = await this.getPokemons();
        const {docs} = response;
        console.log(docs);
    }
    
    render() {
        console.disableYellowBox = true;
        return (
            <View>
                <Text>Pokedex</Text>
            </View>
        )
    }
}