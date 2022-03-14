import { TouchableOpacity, Keyboard, TouchableWithoutFeedback, TextInput, Alert, ImageBackground, Button, Image, Text, View, SafeAreaView } from 'react-native';
import { useState } from "react"
import styles from "./Styles/appStyleSheet"





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
                                <Image style={styles.drinkImage} source={require('../assets/TempImages/drinkArt.png')} />
                            </View>
                        </View>
                        <Text style={styles.subTextFont}>{route.params.drinkName}</Text>
                    </View>

                    <Text style={styles.headerFont}>Ingredients:</Text>
                    <IngredientList />
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


                    <TouchableOpacity style={{ top: 45, alignItems: "center" }}>
                        <View style={[styles.drinkCardLayout, { backgroundColor: "#1D8EB6", borderRadius: 40, width: "50%" }]}>
                            <Text style={styles.subTextFont}>Make Drink!</Text>
                        </View>
                    </TouchableOpacity >
                </ImageBackground >



            </SafeAreaView >
        </View >
    );

}

var _MargaritaData = [{ "unit": "cl", "amount": 3.5, "ingredient": "Tequila" },
{ "unit": "cl", "amount": 2, "ingredient": "Triple Sec", "label": "Cointreau" },
{ "unit": "cl", "amount": 1.5, "ingredient": "Lime juice" }]
function IngredientList() {
    return (
        <View style={{ height: "25%", justifyContent: 'space-evenly' }}>
            {_MargaritaData.map(function (obj, index) {
                return (
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.ingredientListText} key={index}>{obj.ingredient}: {obj.amount} ({obj.unit})</Text>



                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "20%", right: "10%" }}>
                            <View style={{ backgroundColor: "white", borderRadius: 500, }}>
                                <Button
                                    title="-"
                                    onPress={() => Alert.alert('Left button pressed')} />
                            </View>

                            <View style={{ backgroundColor: "white", right: "5%", borderRadius: 500, }}><Button
                                title="+"
                                onPress={() => Alert.alert('Right button pressed')} />
                            </View>

                        </View>
                    </View>
                )
            })}
        </View>

    );
}


export default DetailPage;