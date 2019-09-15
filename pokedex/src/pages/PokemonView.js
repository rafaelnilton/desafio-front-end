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
                            'https://images2.alphacoders.com/566/566368.jpg',
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
