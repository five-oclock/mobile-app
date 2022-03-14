import React, { Component } from 'react';
import { View } from 'react-native';
import styles from "./Styles/appStyleSheet"


import { DrinkCard } from './drinkCard'
// create a component

var _data = [{ name: "Rum Coke" }, { name: "Gin Tonic" }, { name: "Cranberry Vodka" },
{ name: "House Special 1" }, { name: "House Special 2" }, { name: "House Special 3" },
{ name: "House Special 4" }, { name: "House Special 5" }]

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