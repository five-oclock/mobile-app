import { Component } from "react";
import { ImageBackground, View, SafeAreaView } from 'react-native';
import styles from "./Styles/appStyleSheet"
import { PageData } from './pagePopulator'


export class FrequentPage extends Component {

    render() {
        return (

            <ImageBackground source={require('../assets/TempImages/barBackground.png')} resizeMode="cover" style={styles.image}>
                <PageData />
            </ImageBackground >
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            //     <View style={styles.baseBackground} >
            //         {/* <SafeAreaView style={styles.safeView}> */}
            //         <ImageBackground source={"https://reactjs.org/logo-og.png"} resizeMode="cover" style={{
            //             flex: 1,
            //             justifyContent: "center"
            //         }}>
            //             <PageData />
            //         </ImageBackground>
            //         {/* </SafeAreaView> */}
            //     </View>
            // </View>


        );
    }



}