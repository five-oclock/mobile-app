import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, SectionList, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3izmXrz_q4gpLBIvBmjEZO45bvEzYtI0",
  authDomain: "five-o-clock-b09b1.firebaseapp.com",
  projectId: "five-o-clock-b09b1",
  storageBucket: "five-o-clock-b09b1.appspot.com",
  messagingSenderId: "943351743166",
  appId: "1:943351743166:web:ce583337a5bb96166354ef",
  measurementId: "G-WN6G546Z5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Other Pages
import { UserContextProvider, useUserContext } from './api/user.context';
import UACNavigator from './Pages/UAC';
import { FrequentPage } from './Components/FrequentPage'
import DetailPage from './Components/DrinkDetailPage'
import MakePage from './Components/MakingDrinkPage'
import InventoryPage from './Components/InventoryPage'
import ResDetailsPage from './Components/ResDetailsPage';

import styles from "./Components/Styles/appStyleSheet"
import { signOut } from './api/user';


export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <StackScreen />
      </UserContextProvider>
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
 

function StackScreen() {

  const { user, isLoading, error } = useUserContext();

  if (!user)
  {
    console.log({ user });
    return (
      <UACNavigator />
    )
  }
  else
  {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main Pages" >
  
        <Stack.Screen name="Details" component={DetailPage}
          options={{ HeaderTitle: 'My 2' }}
        />
        <Stack.Screen name="MakeDrinkPage" component={MakePage}
          options={{ HeaderTitle: 'My 2' }}
        />
        <Stack.Screen name="Main Pages" component={MyTabs}
          options={{ HeaderTitle: 'My home' }}
        />
      </Stack.Navigator>
    );
  }
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
        component={Catalogue}
        options={{
          tabBarLabel: 'Catalogue',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Inventory"
        component={InventoryPage}
        options={{
          tabBarLabel: 'Inventory',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pen" color={color} size={size} />
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

    </Tab.Navigator>
  );
}


function Catalogue() {
  return (
    <View style={styles.listContainer}>
      <Text style={{ color: "black", fontSize: 25, left: 10, paddingBottom: 10 }}>Find Base/Ingredient</Text>
      <SectionList
        sections={[
          { title: 'A', data: ['Absinthe', 'Aperol', 'Apricot brandy'] },
          { title: 'B', data: ['Blackberry liqueur'] },
          { title: 'C', data: ['Cachaca', 'Calvados', 'Campari', 'Champagne', 'Cherry liqueur', 'Coconut milk', 'Coffee liqueur', 'Cognac', 'Cola', 'Cranberry Juice', 'Cream', "Cream liqueur", "Créme liqueur"] },
          { title: 'D', data: ["DiSaronno", "DOM Bénédictine", "Drambuie", "Dry White Wine",] },
          { title: 'E', data: ["Egg yolk"] },
          { title: 'G', data: ["Galliano", "Gin", "Ginger Ale", "Ginger beer", "Grapefruit juice"] },
          { title: 'H', data: ["Hot coffee"] },
          { title: 'K', data: ["Kirsch"] },
          { title: 'L', data: ["Lemon juice", "Lillet Blonde", "Lime juice"] },
          { title: 'O', data: ["Olive juice", "Orange Bitters", "Orange juice"] },
          { title: 'P', data: ["Peach puree", "Peach schnapps", "Pineapple juice", "Pisco", "Prosecco"] },
          { title: 'R', data: ["Raspberry liqueur", "Red Port"] },
          { title: 'S', data: ["Soda water", "Syrup"] },
          { title: 'T', data: ["Tequila", "Tomato juice", "Triple Sec"] },
          { title: 'V', data: ["Vermouth", "Vodka"] },
          { title: 'W', data: ['Whiskey', "White Rum"] },

        ]}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

function Profile() {

  const { user } = useUserContext();

  return (
    <View style={{ flex: 1, }}>
      <View style={{ left: "2%", top: "2%", width: "98%" }}>
        <Text style={{ color: "black", fontSize: 30, }}>Currently Logged in as:</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ color: "black", fontSize: 25, top: "2%" }}>{ user.email }</Text>
          <Button title='Log Out' onPress={ signOut } />
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
