import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Main extends Component {

    static navigationOptions = {
        title: "Página Inicial"
    }
    render() {
        return (
            <View>
                <Text>Pokedex</Text>
            </View>
        )
    }
}