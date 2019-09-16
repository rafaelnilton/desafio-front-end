import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {getPokemons} from "../services/pokemonsService";
import { Avatar, SearchBar } from 'react-native-elements';

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
                    title="POKEMON"
                    size="xlarge"
                    rounded
                    source={{
                        uri:
                        'https://images-na.ssl-images-amazon.com/images/I/51sGFjgn2VL._SX466_.jpg',
                    }
                }
                    
                />
            </View>
            <TouchableOpacity
                style={styles.showButton}
                onPress={() => {
                    this.props.navigation.navigate('PokemonView', {item: item})
                }}
            >
                <Text style={styles.textButton}>Capturar</Text>
            </TouchableOpacity>

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
        height: 40,
        backgroundColor: '#E3350D',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
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
