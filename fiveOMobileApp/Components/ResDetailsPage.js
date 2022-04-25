import {Text, View, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import React from 'react';
// import { useState } from "react"
import styles from "./Styles/appStyleSheet"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GetInventory, SetInventory } from '../api/emulator';

import { Picker } from '@react-native-picker/picker';

// import { useNavigation } from "@react-navigation/native"
// import { faRunning } from '@fortawesome/free-solid-svg-icons';

const useInventoryData = (reservoirID) => {

    const [state, setState] = React.useState({ data: null, isLoading: true, error: null });

    const setInventoryData = (ingredientID, amount) => {
        const newData = { reservoirID, ingredientID, amount, units: 'mL' };
        SetInventory(reservoirID, newData);
        setState({
            data: newData,
            isLoading: false,
            error: null
        });
    }

    React.useEffect(() => {
        const asyncFunc = async () => {
            try {
                const allInventoryData = await GetInventory();
                const oneInventoryDatum = allInventoryData.filter((item) => item.reservoir == reservoirID);
                if (oneInventoryDatum.length == 1)
                {
                    setState({ data: oneInventoryDatum[0], isLoading: false, error: null });
                }
                return;
            } catch (error) {}
            setState({ 
                data: {
                    reservoirID: reservoirID,
                    ingredientID: 0,
                    amount: 750,
                    units: 'mL'
                }, 
                isLoading: false, 
                error: null
            });
        }

        setState({ data: null, isLoading: true, error: null });
        asyncFunc();
    }, [reservoirID]);

    return ({ ...state, setInventoryData })

}

function ResDetails({ number, ...props }){
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

    const { data, isLoading, error, setInventoryData } = useInventoryData(number);
        
    return (
        <SafeAreaView style={styles.saveAreaViewContainer}>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <View style={styles.viewContainer}>

                    {
                        data && (
                            <Picker
                                selectedValue={ data.ingredientID }
                                onValueChange={(itemValue, itemIndex) => {
                                    setInventoryData(itemIndex, 750);
                                }}>
        
                                {
                                    liquors.map((liquorName, liquorIndex) => (
                                        <Picker.Item label={ liquorName } value={ liquorIndex } />
                                    ))
                                }
        
                            </Picker>
                        )
                    }
                    

                    {/* {renderHeader()} */}
                    {/* <ScrollView
                        showsVerticalScrollIndicator={false}
                        alwaysBounceVertical={false}
                        contentContainerStyle={styles.scrollViewContainer}>

                    </ScrollView> */}
                        {/* <SelectDropdown
                            data={liquors}
                            // defaultValueByIndex={1}
                            // defaultvalue = {"Tequila"}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            defaultButtonText={'Select a liquor'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            buttonStyle={styles.dropdown1BtnStyle}
                            buttonTextStyle={styles.dropdown1BtnTxtStyle}
                            renderDropdownIcon={isOpened => {
                                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                            }}
                            dropdownIconPosition={'right'}
                            dropdownStyle={styles.dropdown1DropdownStyle}
                            rowStyle={styles.dropdown1RowStyle}
                            rowTextStyle={styles.dropdown1RowTxtStyle}
                        /> */}
                </View>
                {/* <Text style={styles.titleFont}>{'mL'}</Text> */}
        </SafeAreaView>
        
    )

}
export default ResDetails
