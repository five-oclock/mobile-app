// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from 'react-native-vector-icons/FontAwesome'

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Recent} />
      <Tab.Screen name="Settings" component={Favorites} />
      <Tab.Screen name="Catalogue" component={Catalogue} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function Recent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recent!</Text>
    </View>
  );
}

function Favorites() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites!!</Text>
    </View>
  );
}

function Catalogue() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Catalogue!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!!</Text>
    </View>
  );
}

