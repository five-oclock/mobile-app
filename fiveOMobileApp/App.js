import React from 'react';
import { Alert, SafeAreaView, ImageBackground, TouchableOpacity, SectionList, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Other Pages
import { FrequentPage } from './Components/FrequentPage'
import DetailPage from './Components/DrinkDetailPage'
// import OrderSent from './Components/MakingDrinkPage'
import CurrentInv from './Components/CurrentInventory'

import { MakePage } from './Components/MakeDrinkPage';
import { FullCat } from './Components/FullCateloguePage';
import styles from "./Components/Styles/appStyleSheet"


export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Main Pages"

    >
      <Stack.Screen name="Details" component={DetailPage}
        options={{ HeaderTitle: 'My 2' }}
      />
      <Stack.Screen name="Main Pages" component={MyTabs}
        options={{ HeaderTitle: 'My home' }}
      />
    </Stack.Navigator>
  );
}


function MakeDrinkStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Create Drink"
    >
      <Stack.Screen name="Create Drink" component={MakePage}
        options={{ HeaderTitle: 'My 2' }}
      />
      <Stack.Screen name="Full Catelogue List" component={FullCat}
        options={{ HeaderTitle: 'My 2' }}
      />
    </Stack.Navigator>


  );
}


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Recent"

      screenOptions={{
        tabBarActiveTintColor: '#bd8334',
        headerStyle: {
          backgroundColor: "#B1AEA9"
        }
      }}
    >
      <Tab.Screen
        name="Frequently Ordered"
        component={FrequentPage}
        options={{
          tabBarLabel: 'Frequent',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Catalogue"
        component={CurrentInv}
        options={{
          tabBarLabel: 'Current Inventory',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Make Cocktail Tab"
        component={MakeDrinkStack}
        options={{
          tabBarLabel: 'Make Cocktail',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lead-pencil" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}




function Profile() {
  return (
    <View style={{ flex: 1, }}>
      <View style={{ left: "2%", top: "2%", width: "98%" }}>
        <Text style={{ color: "black", fontSize: 30, }}>Currently Logged in as:</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "black", fontSize: 25, top: "2%" }}>Kai H.</Text>
          <Text style={{ color: "blue", fontSize: 23, top: "2%", textDecorationLine: 'underline' }}>Log Out</Text>
        </View>
        <Text style={{ color: "black", fontSize: 25, top: "20%" }}>Serving Tables:</Text>
        <Text style={{ color: "black", fontSize: 25, top: "20%", left: "5%" }}>4:</Text>
        <Text style={{ color: "black", fontSize: 15, top: "20%", left: "10%" }}>Gin Tonic: 7:30</Text>
        <Text style={{ color: "black", fontSize: 15, top: "20%", left: "10%" }}>Gin Tonic: 8:15</Text>
        <Text style={{ color: "black", fontSize: 25, top: "20%", left: "5%" }}>5:</Text>
        <Text style={{ color: "black", fontSize: 15, top: "20%", left: "10%" }}>Cranberry Vodka: 7:43</Text>
        <Text style={{ color: "black", fontSize: 25, top: "20%", left: "5%" }}>6:</Text>
        <Text style={{ color: "black", fontSize: 15, top: "20%", left: "10%" }}>House Special 1: 6:30</Text>
      </View>


    </View>
  );
}


