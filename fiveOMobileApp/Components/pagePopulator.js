import React, { Component } from 'react';
import { View } from 'react-native';
import styles from "./Styles/appStyleSheet"


import { DrinkCard } from './drinkCard'
// create a component

var _data = [{ name: "Ceo Martini", imageName: require("../assets/TempImages/ceoMartini.png") }, { name: "Cosmo", imageName: require("../assets/TempImages/cosmo.jpg") }, { name: "LongIsland", imageName: require("../assets/TempImages/longIsland.jpg") },
{ name: "Martini", imageName: require("../assets/TempImages/martini.jpg") }, { name: "Negroni", imageName: require("../assets/TempImages/negroni.jpg") }, { name: "Tequila Sunrise", imageName: require("../assets/TempImages/tequilaSunrise.jpg") },
{ name: "White Russian", imageName: require("../assets/TempImages/whiteRussian.jpg") }, { name: "House Special 5", imageName: require("../assets/TempImages/drink1.jpg") }]

export class PageData extends Component {
    render() {
        return (
            <View style={styles.imagePairs}>
                {_data.map(function (object, index) {
                    return <DrinkCard key={index} name={object.name} imageSoure={object.imageName} />
                })}

            </View>

        );
    }
}

//make this component available to the app
export default PageData;