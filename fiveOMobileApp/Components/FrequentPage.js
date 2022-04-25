import { Component } from "react";
import { ImageBackground, View, SafeAreaView } from 'react-native';
import styles from "./Styles/appStyleSheet"
import { DrinkCard } from './drinkCard'

var _data = [{ name: "Lemon Twist", imageName: require("../assets/TempImages/ceoMartini.png") }, { name: "Cosmopolitan", imageName: require("../assets/TempImages/cosmo.jpg") }, { name: "Yellow Bird", imageName: require("../assets/TempImages/longIsland.jpg") },
{ name: "Between the Sheets", imageName: require("../assets/TempImages/martini.jpg") }, { name: "Sex on the Beach", imageName: require("../assets/TempImages/negroni.jpg") }, { name: "Tequila Sunrise", imageName: require("../assets/TempImages/tequilaSunrise.jpg") },
{ name: "Dry Martini", imageName: require("../assets/TempImages/whiteRussian.jpg") }, { name: "Whiskey Sour", imageName: require("../assets/TempImages/drink1.jpg") }]

export class FrequentPage extends Component {

    render() {
        return (

            <ImageBackground source={require('../assets/TempImages/barBackground.png')} resizeMode="cover" style={styles.image}>
                <PageData />
            </ImageBackground >
        );
    }
}

function PageData() {
    return (
        <View style={styles.imagePairs}>
            {_data.map(function (object, index) {
                return <DrinkCard key={index} name={object.name} imageSoure={object.imageName} />
            })}

        </View>

    );
}