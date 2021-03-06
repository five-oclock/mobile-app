
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./Styles/appStyleSheet"
import { useNavigation } from "@react-navigation/native"

function OpenDetailScreen(props) {
    const navigation = useNavigation();
    // var src = props.src;
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Details", {
            drinkName: props.name,
            drinkImg: props.src
        })} underlayColor="white">
            <View style={styles.drinkCardLayout}>
                <Image style={styles.drinkImage} source={props.src} />
                <Text style={styles.subTextFont}>{props.name}</Text>
            </View>
        </TouchableOpacity >);
}

// create a component
export class DrinkCard extends Component {

    render() {

        return (
            <OpenDetailScreen name={this.props.name} src={this.props.imageSoure} />
        );
    }
}

//make this component available to the app
export default DrinkCard;