import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomePage } from './WelcomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const Stack = createNativeStackNavigator();

const UACNavigator = () => (
    <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome'    component={ WelcomePage }   options={{ title: 'Welcome' }} />
        <Stack.Screen name='Login'      component={ LoginPage }     options={{ title: 'Login' }} />
        <Stack.Screen name='Register'   component={ RegisterPage }  options={{ title: 'Register' }} />
    </Stack.Navigator>
)

export default UACNavigator;