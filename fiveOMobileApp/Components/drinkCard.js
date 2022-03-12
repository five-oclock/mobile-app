
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./Styles/appStyleSheet"
// create a component
export class DrinkCard extends Component {
    _onPressButton() {
        alert('You tapped the button!')
        // alert(this.props.title)
    }

    render() {
        return (
            <TouchableOpacity onPress={this._onPressButton} underlayColor="red">
                <View style={styles.drinkCardLayout}>
                    <Image style={styles.drinkImage} source={require('../assets/TempImages/drinkArt.png')}
                    />
                    <Text style={styles.subTextFont}>{this.props.title}</Text>
                </View>
            </TouchableOpacity >
        );
    }
}

//make this component available to the app
export default DrinkCard;