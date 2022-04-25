import React, { useState, Component } from 'react';
import { SafeAreaView, ImageBackground, SectionList, Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from "./Styles/appStyleSheet"
import { useNavigation } from "@react-navigation/native"
import { GetInventory } from '../api/emulator';

const liquors = [
  'Tequila', 
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
  'Peach schnapps'
];

const ReservoirListItem = ({ item, onPress, backgroundColor, textColor }) => {
  // console.log(item);
  // return null;
  return (
    <TouchableOpacity onPress={ onPress } style={[ styles.item, backgroundColor ]}>
      <Text style={[styles.title, textColor]}>{ `${ item.reservoir }. ${liquors[item['ingredient-id']]} - ${ item.quantity } mL` }</Text>
    </TouchableOpacity>
  );
};

const useInventory = () => {

  const [state, setState] = React.useState({ inventory: null, isLoading: true, error: null });

  React.useEffect(() => {
    const asyncFunc = async () => {
      console.log('Getting inventory data');
      try {
        const inventoryData = await GetInventory();
        console.log('Got inventory data!', inventoryData.length);
        setState({
          inventory: inventoryData,
          isLoading: false,
          error: null
        });
      } catch (error) {
        console.log('Could not get inventory data, using default');
        setState({
          inventoryData: liquors.map((liquor, idx) => ({ reservoir: idx, 'ingredient-id': idx, quantity: 750, units: 'mL' })),
          isLoading: false,
          error: null
        })
      }
      
    };
    asyncFunc();
  }, []);

  return state;

}

function InventoryPage() {
    const { inventory, isLoading, error } = useInventory();

    const renderItem = ({ item }) => {
      const backgroundColor = '#DCBD7C'; // item.id === selectedId ? "#BD8334" : "#DCBD7C";
      // const color = 'black'; // item.id === selectedId ? 'white' : 'black';
      return (
        <ReservoirListItem
          item={item}
          // onPress={() => setSelectedId(item.id)}
          // onPress={() => navigation.navigate("ResDetailsPage")}
          backgroundColor={{ backgroundColor }}
          // textColor={{ color }}
        />
      );
    }

    // console.log(inventory ? inventory : 'No inventory!');

    if (inventory)
    {
      return (
        <SafeAreaView style={ styles.container }>
          <FlatList
            data={ inventory }
            renderItem={ renderItem }
            keyExtractor={(item) => item.reservoir} />
        </SafeAreaView>
      )
    }
    else
    {
      return null;
    }

    return(
    <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    );

}

export default InventoryPage