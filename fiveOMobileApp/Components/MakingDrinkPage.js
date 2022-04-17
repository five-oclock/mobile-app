import { SafeAreaView, ImageBackground, Image, View, Text } from 'react-native';

import styles from "./Styles/appStyleSheet"
const MakePage = ({ route }) => {

    return (
        <View style={styles.baseBackground} >
            <SafeAreaView style={styles.safeView}>
                <ImageBackground source={require('../assets/TempImages/barBackground.png')} resizeMode="cover" style={styles.image}>
                    <View style={{ paddingTop: "45%", alignItems: "center" }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>Order Sent!</Text>
                        <View style={[styles.drinkImage, { backgroundColor: "white" }]}>
                            <Image source={require("../assets/TempImages/check.png")} style={styles.drinkImage} />
                        </View>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15, paddingTop: "5%" }}>A Cosmo is now being made for Table 5</Text>
                    </View>
                </ImageBackground>


            </SafeAreaView >
        </View >
    );

}

export default MakePage;