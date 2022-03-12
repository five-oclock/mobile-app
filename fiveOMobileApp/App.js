import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';





import { DrinkCard } from './Components/drinkCard'
import { HeaderTitle } from "./Components/Header"
import styles from "./Components/Styles/appStyleSheet"



// Eventually use a map function on the returned array of most recent quries
// That will populate the page with drink cards

export default function App() {
  const cocktailNames = ["Alan", "Jerry", "Tom", "David", "Kyle", "Mao", "Kelly", "Niece"]
  let importedArr = []
  for (let i = 0; i < 4; i++) {
    importedArr.push([cocktailNames[i * 2], cocktailNames[i * 2 + 1]])
  }


  return (
    <View style={styles.baseBackground} >
      <SafeAreaView style={styles.safeView}>
        <View style={styles.bodyFile}>
          <HeaderTitle title=" Most Recent Cocktail" />
          <ScrollView>
            {importedArr.map(x =>
              <View style={styles.imagePairs}>
                <DrinkCard title={x[0]} />
                <DrinkCard title={x[1]} />
              </View>
            )}
          </ScrollView>
        </View>
        <View style={styles.tempBottomBar}>

        </View>

      </SafeAreaView>
    </View>


  );
}


