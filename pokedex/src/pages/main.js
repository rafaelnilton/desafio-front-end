import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {getPokemons} from "../services/pokemonsService";

export default class Main extends Component {

    static navigationOptions = {
        title: "Pokedex",
        headerStyle: {
            backgroundColor: '#DA552F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }

    state = {
        data: [],
        details: [],
        page: 1
    }


    componentDidMount() {
        this.loadPokemons()
    }

    loadPokemons = async (page = 1) => {
        await getPokemons(page).then((res) => {
            this.setState({data: [...this.state.data, ...res.docs], page})
        })
        .catch(async (error) => {
            console.log(error)
        });
    }

    renderItem = ({item}) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <TouchableOpacity
                style={styles.showButton}
                onPress={() => {}}
            >
                <Text style={styles.textButton}>Show</Text>
            </TouchableOpacity>

        </View>
    )
    
    loadMore = () => {

        const {page, details} = this.state;
        if(page === details.pages) return;

        const pageNumber = page + 1;
        this.loadPokemons(pageNumber);
    }
    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.container}>
                <FlatList
                style={styles.list}
                data={this.state.data}
                keyExtractor={item => item._id}
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
        marginBottom: 20
    },
    itemTitle: {
        fontSize: 18,
        color: "#333",
        fontWeight: "bold"
    },
    itemDescription: {
        fontSize: 18,
        color: "#999",
        lineHeight: 24,
        marginTop: 5
    },
    showButton: {
        height: 40,
        backgroundColor: '#DA552F',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    textButton: {
        color: "white",
        fontWeight: "bold"
    }


})
