import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {getPokemons} from "../services/pokemonsService";
import { Avatar, SearchBar } from 'react-native-elements';
import SoundPlayer from 'react-native-sound-player';
import Tabs from '../components/Tabs/Tabs';

export default class Main extends Component {

    static navigationOptions = {
        title: "Pokemons",
        headerStyle: {
            backgroundColor: '#E3350D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }

    state = {
        searchText: "",
        data: [],
        details: [],
        page: 1,
        filteredData: []
    }


    capturar(item) {
        try {
            SoundPlayer.playSoundFile('trying', 'mp3');
            try {
                setTimeout(() => {
                    SoundPlayer.playSoundFile('catching', 'mp3');
                    setTimeout(() => { 
                        this.props.navigation.navigate('PokemonView', {item: item})
                    },1000);
                }, 2000)
            } catch (e) {
                console.log(`cannot play the sound file`, e)
            }
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }


    componentDidMount() {
        this.loadPokemons()
    }

    loadPokemons = async (page = 1) => {
        await getPokemons(page).then((res) => {
            this.setState({data: [...this.state.data, ...res.results], page})
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

    search = (searchText) => {
        this.setState({searchText: searchText});
      
        let filteredData = this.state.data.filter(function (item) {
          return item.name.includes(searchText);
        });
      
        this.setState({filteredData: filteredData});
      };

    renderItem = ({item}) => (
        <View style={styles.itemContainer}>
            
            <View style={styles.alignCenter}>
                <Text style={styles.itemTitle}>{item.name}</Text>
            </View>
            <View style={styles.img}>
                <Avatar
                    title=""
                    size="xlarge"
                    rounded
                    source={{
                        uri:
                        this.randomImg(),
                    }
                }
                    
                />
            </View>
            <View style={styles.alignCenter}>
                <TouchableOpacity
                    style={styles.showButton}
                    onPress={() => { this.capturar(item)}}
                >
                    <Text style={styles.textButton}>Capturar</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
    
    loadMore = () => {
        if(this.state.filteredData.length === 0) {
            const {page, details} = this.state;
            if(page === details.pages) return;
    
            const pageNumber = page + 1;
            this.loadPokemons(pageNumber);
        }
    }

    render() {
        console.disableYellowBox = true;
        return (
           
            <View style={styles.container}>
                <SearchBar
                    round={true}
                    lightTheme={true}
                    placeholder="Search pokemon"
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={this.search}
                    value={this.state.searchText}
                />

                <FlatList
                    data={this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data}
                    keyExtractor={(item) => `item-${item.id}`}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />

                <Tabs/>
               
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    list: {
        padding: 20,
    },
    itemContainer: {
        backgroundColor: "#fff",
        borderColor: "#DDD",
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },
    itemTitle: {
        fontSize: 22,
        color: "#333",
        fontWeight: "bold",
        marginTop: 10,
        marginBottom:10,
        justifyContent: "center",
        alignItems: "center"
    },
    alignCenter: {
        justifyContent: "center",
        alignItems: "center"
    },
    itemDescription: {
        fontSize: 18,
        color: "#999",
        lineHeight: 24,
        marginTop: 5
    },
    showButton: {
        flexDirection: 'row',
        backgroundColor: '#E3350D',
        justifyContent: "center",
        alignItems: "center",
        width: 220,
        height: 45,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 100,
        marginTop: 15,
    },
    textButton: {
        color: "white",
        fontWeight: "bold"
    },
    img: {
        justifyContent: "center",
        alignItems: "center",
    }


})
