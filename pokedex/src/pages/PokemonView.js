import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

export default class Pokemon extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.item.name,
        headerStyle: {
            backgroundColor: '#E3350D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    })

    randomImg() {
        let images = [
            'http://pngimg.com/uploads/pokemon/pokemon_PNG111.png',
            'http://pngimg.com/uploads/pokemon/pokemon_PNG125.png',
            'http://pngimg.com/uploads/pokemon/pokemon_PNG113.png',
            'http://pngimg.com/uploads/pokemon/pokemon_PNG161.png',
            'https://clipart.info/images/ccovers/1528080659Pokemon-PNG-Image.png'
        ]

        return images[Math.floor(Math.random() * images.length)]
    }

    render (){
        return(
            <View>
                <View style={styles.img}>
                    <Avatar
                        title="POKEMON"
                        size="xlarge"
                        rounded
                        source={{
                            uri:
                            this.randomImg(),
                        }
                    }
                        
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff'
    }
})