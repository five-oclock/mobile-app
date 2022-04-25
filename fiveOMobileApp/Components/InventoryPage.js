import { React, useState, Component } from 'react';
import { SafeAreaView, ImageBackground, SectionList, Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from "./Styles/appStyleSheet"
import { useNavigation } from "@react-navigation/native"


const ReservoirListItem = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
  
const DATA = [
  {
    id: "res1",
    title: "Reservoir 1",
  },
  {
    id: "res2",
    title: "Reservoir 2",
  },
  {
    id: "res3",
    title: "Reservoir 3",
  },
  {
    id: "res4",
    title: "Reservoir 4",
  },
  {
    id: "res5",
    title: "Reservoir 5",
  },
  {
    id: "res6",
    title: "Reservoir 6",
  },
  {
    id: "res7",
    title: "Reservoir 7",
  },
  {
    id: "res8",
    title: "Reservoir 8",
  },
  {
    id: "res9",
    title: "Reservoir 9",
  },
  {
    id: "res10",
    title: "Reservoir 10",
  },
  {
    id: "res11",
    title: "Reservoir 11",
  },
  {
    id: "res12",
    title: "Reservoir 12",
  },
];

function InventoryPage() {
    const [selectedId, setSelectedId] = useState(null);
    const navigation = useNavigation();

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? "#BD8334" : "#DCBD7C";
        const color = item.id === selectedId ? 'white' : 'black';
    return (
        <ReservoirListItem
          item={item}
          // onPress={() => setSelectedId(item.id)}
          onPress={() => navigation.navigate("ResDetailsPage")}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
    );}
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