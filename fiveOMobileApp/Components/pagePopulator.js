import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./Styles/appStyleSheet"
// create a component

var _data = [{ name: "Alan" }, { name: "Yagga" }, { name: "Jerry" },
{ name: "David" }, { name: "Kyle" }, { name: "Mao" }, { name: "Kelly" }, { name: "Joe WHo" }]
import { DrinkCard } from './drinkCard'
export class PageData extends Component {


    render() {
        return (
            <View style={styles.imagePairs}>
                {_data.map(function (object, index) {
                    return <DrinkCard key={index} name={object.name} />
                })}

            </View>

        );
    }
}

//make this component available to the app
export default PageData;