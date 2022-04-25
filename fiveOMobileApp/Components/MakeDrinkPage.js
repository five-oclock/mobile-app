import { ImageBackground, View, Text, TouchableOpacity, Button } from "react-native";
import { Component, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Styles/appStyleSheet"
import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FullCat } from './FullCateloguePage';

const Stack = createNativeStackNavigator();

// FOR STAFF TO CRAFT/CREATE NEW COCKTAIL RECIPIES
export class MakePage extends Component {
    state = {
        selected: false,
        index: 0,
        newSelected: [false, false, false, false],
        listIng: [{
            "unit": "cl",
            "amount": 1,
            "ingredient": "Blank",
        }, {
            "unit": "cl",
            "amount": 1,
            "ingredient": "Blank",
        },
        {
            "unit": "cl",
            "amount": 1,
            "ingredient": "Blank",
        },
        {
            "unit": "cl",
            "amount": 1,
            "ingredient": "Blank",
        }]
    };

    onSelect = (data, drinkName) => {
        this.setState(data);
        this.state.listIng[this.state.index].ingredient = drinkName
        this.state.index += 1

    };

    onPress = () => {
        if (this.state.index < 4) {
            const { navigation } = this.props;
            navigation.navigate("Full Catelogue List", { onSelect: this.onSelect })
        }

    };

    onPressDone = () => {
        this.state.index = 0
        this.state.listIng = [{
            "unit": "cl",
            "amount": 1,
            "ingredient": "Blank",
        }, {
            "unit": "cl",
            "amount": 1,
            "ingredient": "Blank",
        },
        {
            "unit": "cl",
            "amount": 1,
            "ingredient": "Blank",
        },
        {
            "unit": "cl",
            "amount": 1,
            "ingredient": "Blank",
        }]
        alert("Saved The Drink!")

        const { navigation } = this.props;
        navigation.goBack()
    };


    render() {
        return (
            <View style={styles.baseBackground}>
                <SafeAreaView style={styles.safeView}>
                    <ImageBackground source={require('../assets/TempImages/barBackground.png')} resizeMode="cover" style={styles.image}>
                        <View style={styles.headerLayout}>
                            <Text style={styles.headerFont}>{this.state.selected ? "Selected" : "Not Selected"}</Text>
                        </View>

                        <IngredientList ingredientList={this.state.listIng} count={this.state.index} />
                        <TouchableOpacity onPress={this.onPress} style={{ top: 45, alignItems: "center" }}>
                            <View style={[styles.drinkCardLayout, { backgroundColor: "#1D8EB6", borderRadius: 40, width: "50%", marginTop: "20%" }]}>
                                <Text style={styles.subTextFont}>Add an Ingredient</Text>
                            </View>
                        </TouchableOpacity >

                        <TouchableOpacity onPress={this.onPressDone} style={{ top: 45, alignItems: "center" }}>
                            <View style={[styles.drinkCardLayout, { backgroundColor: "#1D8EB6", borderRadius: 40, width: "50%", marginTop: "35%" }]}>
                                <Text style={styles.subTextFont}>Finish Cocktail</Text>
                            </View>
                        </TouchableOpacity >
                    </ImageBackground>
                </SafeAreaView>
            </View>
        );
    }




}

function IngredientList(props) {

    const _drinkIngredients = props.ingredientList
    var _ingAmount = []
    if (!_drinkIngredients.length) {
        return null;
    }

    return (
        <View style={{ height: "25%", justifyContent: 'space-evenly' }}>

            {

                _drinkIngredients.map(function (obj, index) {

                    if (obj.unit === undefined) {
                        return
                    }

                    const [orgAmount, setAmount] = useState(obj.amount)
                    _ingAmount[index] = [orgAmount, setAmount]
                    const incrementValue = () => setAmount(orgAmount + 1)
                    const decrementValue = () => setAmount(orgAmount - 1)
                    return (
                        <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#1D8EB6", marginTop: "20%", borderRadius: 40, }}>
                            <Text style={styles.ingredientListText} key={index}>{obj.ingredient}: {_ingAmount[index]} ({obj.unit})</Text>



                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "20%", right: "10%" }}>
                                <View style={{ backgroundColor: "white", borderRadius: 500, }}>
                                    <Button
                                        title="-"
                                        onPress={decrementValue}

                                        key={[false, index]}
                                    />
                                </View>

                                <View style={{ backgroundColor: "white", right: "5%", borderRadius: 500, }}><Button
                                    title="+"
                                    onPress={incrementValue}
                                    key={[true, index]} />
                                </View>

                            </View>
                        </View>
                    )
                })}
        </View>

    );
}

export default MakePage;