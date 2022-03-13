import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { PageData } from './Components/pagePopulator'
import { HeaderTitle } from "./Components/Header"
import styles from "./Components/Styles/appStyleSheet"



// Eventually use a map function on the returned array of most recent quries
// That will populate the page with drink cards
const cocktailNames = [[0, "Alan"], [2, "Yagga"], [2, "Jerry"], [3, "David"], [4, "Kyle"], [5, "Mao"], [6, "Kelly"], [7, "Joe WHo"]]

export default function App() {

  let importedArr = []
  for (let i = 0; i < 4; i++) {
    importedArr.push([cocktailNames[i * 2], cocktailNames[i * 2 + 1]])
  }


  return (
    <View style={styles.baseBackground} >
      <SafeAreaView style={styles.safeView}>
        <View style={styles.bodyFile}>
          <HeaderTitle title="Favorites" />
          <ScrollView>
            <PageData />
          </ScrollView>
        </View>
        <View style={styles.tempBottomBar}>

        </View>

      </SafeAreaView>
    </View>


  );
}


