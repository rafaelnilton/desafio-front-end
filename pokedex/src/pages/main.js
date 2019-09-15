import React, {Component} from 'react';
import {View, Text} from 'react-native';

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
    
    render() {
        return (
            <View>
                <Text>Pokedex</Text>
            </View>
        )
    }
}