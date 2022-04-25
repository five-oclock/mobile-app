import { TouchableOpacity, Keyboard, TouchableWithoutFeedback, TextInput, Alert, ImageBackground, Button, Image, Text, View, SafeAreaView } from 'react-native';
import { useState } from "react"
import styles from "./Styles/appStyleSheet"
import { useNavigation } from "@react-navigation/native"




const DetailPage = ({ route }) => {
    const [number, onChangeNumber] = useState(null);
    return (
        <View style={styles.baseBackground} >
            <SafeAreaView style={styles.safeView}>
                <ImageBackground source={require('../assets/TempImages/barBackground.png')} resizeMode="cover" style={styles.image}>
                    <View style={styles.headerLayout}>
                        <Text style={styles.headerFont}>Cocktail Summary</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.detailImageHeader}>
                            <View style={styles.drinkImageBox}>
                                <Image style={styles.drinkImage} source={route.params.drinkImg} />
                            </View>
                        </View>
                        <Text style={styles.subTextFont}>{route.params.drinkName}</Text>
                    </View>

                    <Text style={styles.headerFont}>Ingredients:</Text>
                    <IngredientList drinkType={route.params.drinkName} />
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={{ backgroundColor: "#B1AEA9" }}>
                            <Text style={[styles.headerFont]}>Table:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="4"
                                keyboardType="numeric"
                            />
                        </View>
                    </TouchableWithoutFeedback>

                    <MakeDrinkScreen />

                </ImageBackground>


            </SafeAreaView >
        </View >
    );

}


function MakeDrinkScreen() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("MakeDrinkPage")} style={{ top: 45, alignItems: "center" }}>
            <View style={[styles.drinkCardLayout, { backgroundColor: "#1D8EB6", borderRadius: 40, width: "50%" }]}>
                <Text style={styles.subTextFont}>Make Drink!</Text>
            </View>
        </TouchableOpacity >

    );
}

function IngredientList(props) {
    const drinkData = require('./../CocktailRecipes/recipes.json');
    const _drinkIngredients = drinkData.find(drink => drink.name === props.drinkType)
    var _ingAmount = []

    // state

    return (
        <View style={{ height: "25%", justifyContent: 'space-evenly' }}>

            {

                _drinkIngredients.ingredients.map(function (obj, index) {

                    if (obj.unit === undefined) {
                        return
                    }

                    const [orgAmount, setAmount] = useState(obj.amount)
                    _ingAmount[index] = [orgAmount, setAmount]
                    const incrementValue = () => setAmount(orgAmount + 1)
                    const decrementValue = () => setAmount(orgAmount - 1)
                    return (
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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


export default DetailPage;