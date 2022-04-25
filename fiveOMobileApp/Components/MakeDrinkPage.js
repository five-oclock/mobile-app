import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Styles/appStyleSheet"



const MakePage = () => {
    return (
        <View style={styles.baseBackground}>
            <SafeAreaView style={styles.safeView}>
                <ImageBackground source={require('../assets/TempImages/barBackground.png')} resizeMode="cover" style={styles.image}>
                    <View style={styles.headerLayout}>
                        <Text style={styles.headerFont}>Make Cocktail</Text>
                    </View>
                    <AddIngredient />
                </ImageBackground>
            </SafeAreaView>
        </View>





    );
}

function AddIngredient() {
    return (
        <TouchableOpacity /**onPress={() => navigation.navigate("MakeDrinkPage")}**/ style={{ top: 45, alignItems: "center" }}>
            <View style={[styles.drinkCardLayout, { backgroundColor: "#1D8EB6", borderRadius: 40, width: "50%" }]}>
                <Text style={styles.subTextFont}>Add an Ingredient</Text>
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