
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./Styles/appStyleSheet"
// create a component
export class DrinkCard extends Component {
    render() {
        return (

            <TouchableOpacity onPress={() => alert(this.props.name)} underlayColor="red">
                <View style={styles.drinkCardLayout}>
                    <Image style={styles.drinkImage} source={require('../assets/TempImages/drinkArt.png')} />
                    <Text style={styles.subTextFont}>{this.props.name}</Text>
                </View>
            </TouchableOpacity >
        );
    }
}

//make this component available to the app
export default DrinkCard;