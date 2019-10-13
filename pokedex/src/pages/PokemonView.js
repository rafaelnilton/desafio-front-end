import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {getPokemonsById} from "../services/pokemonsService";

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

    state = {
        data: [],
    }

    componentDidMount() {
        this.loadPokemon()
    }

    loadPokemon = async (id = 1) => {
        await getPokemonsById(id).then((res) => {
            this.setState({data: res})
            console.log("Pokemon: ", res);
        })
        .catch(async (error) => {
            console.log(error)
        });
    }



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
                        size="xlarge"
                        rounded
                        source={{
                            uri:
                            this.randomImg(),
                        }
                    }/>
                     <Animatable.Text style={styles.animation} animation="slideInDown">
                        <Text style={styles.title}>Pokemon capturado com sucesso!</Text>
                    </Animatable.Text>
                </View>
                <View>
                    <ListItem
                        title="Peso"
                        subtitle={this.state.data.weight}
                        bottomDivider
                    />
                     <ListItem
                        title="Tamanho"
                        subtitle={this.state.data.height}
                        bottomDivider
                    />
                    
                        {
                            this.state.data.abilities ? this.state.data.abilities.map((item) => (
                            <ListItem
                                title={item.ability.name}
                                subtitle={item.slot}
                                bottomDivider
                            />
                            )) : <Text>O pokemon não possui habilidades!</Text>
                        }
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        marginTop: 20
    },
    title: {
        fontSize: 18,
        color: "#E3350D",
        lineHeight: 24,
        marginTop: 5
    },
    animation: {
        marginTop: 20
    }
})