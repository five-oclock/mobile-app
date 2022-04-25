import {Text, View, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import React from 'react';
// import { useState } from "react"
import styles from "./Styles/appStyleSheet"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import { useNavigation } from "@react-navigation/native"
// import { faRunning } from '@fortawesome/free-solid-svg-icons';

function ResDetails(){
    const liquors = ['Tequila', 
        'Vodka',
        'White rum',
        'Gin',
        'Triple sec',
        'Whiskey',
        'Cognac',
        'Kahlua',
        'Galliano',
        'Dry vermouth',
        'Aperol',
        'Peach schnapps'];

    const renderHeader = () => {
        return (
            <View style={[styles.header, styles.shadow]}>
            <Text style={styles.headerTitle}>{1}</Text>
            </View>
        );
        };
        
    // return (
    //     <SafeAreaView style={styles.saveAreaViewContainer}>
    //         <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
    //             <View style={styles.viewContainer}>
    //                 {renderHeader()}
    //                 <ScrollView
    //                     showsVerticalScrollIndicator={false}
    //                     alwaysBounceVertical={false}
    //                     contentContainerStyle={styles.scrollViewContainer}></ScrollView>
    //                         <SelectDropdown
    //                         data={liquors}
    //                         // defaultValueByIndex={1}
    //                         // defaultvalue = {"Tequila"}
    //                         onSelect={(selectedItem, index) => {
    //                         console.log(selectedItem, index);
    //                         }}
    //                         defaultButtonText={'Select a liquor'}
    //                         buttonTextAfterSelection={(selectedItem, index) => {
    //                         return selectedItem;
    //                         }}
    //                         rowTextForSelection={(item, index) => {
    //                         return item;
    //                         }}
    //                         buttonStyle={styles.dropdown1BtnStyle}
    //                         buttonTextStyle={styles.dropdown1BtnTxtStyle}
    //                         renderDropdownIcon={isOpened => {
    //                         return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
    //                         }}
    //                         dropdownIconPosition={'right'}
    //                         dropdownStyle={styles.dropdown1DropdownStyle}
    //                         rowStyle={styles.dropdown1RowStyle}
    //                         rowTextStyle={styles.dropdown1RowTxtStyle}
    //                     />
                        
    //             </View>
    //             <Text style={styles.titleFont}>{'oz'}</Text>
    //     </SafeAreaView>
        
    // )

}
export default ResDetails
