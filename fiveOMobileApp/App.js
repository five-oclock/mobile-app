import React from 'react';
import { SafeAreaView, ImageBackground, SectionList, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Other Pages
import { FrequentPage } from './Components/FrequentPage'
import DetailPage from './Components/DrinkDetailPage'
import MakePage from './Components/MakingDrinkPage'

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
      <Stack.Screen name="MakeDrinkPage" component={MakePage}
        options={{ HeaderTitle: 'My 2' }}
      />
      <Stack.Screen name="Main Pages" component={MyTabs}
        options={{ HeaderTitle: 'My home' }}
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
        component={Catalogue}
        options={{
          tabBarLabel: 'Catalogue',
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


