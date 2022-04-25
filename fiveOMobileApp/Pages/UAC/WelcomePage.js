// Stolen from https://github.com/diegocasmo/expo-firebase-authentication/blob/main/src/features/guest-welcome/screens/GuestWelcomeScreen.js

import React from 'react'
import PropTypes from 'prop-types'
import { Button, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const WelcomePage = ({ navigation }) => {
  const handlePressOnSignIn = () => {
    navigation.navigate('Login')
  }

  const handlePressOnSignUp = () => {
    navigation.navigate('Register')
  }

  return (
    <SafeAreaView>
      <View>
        <View>
          <Button onPress={handlePressOnSignIn} title="Log In" />
          <Button onPress={handlePressOnSignUp} title="Register" />
        </View>
      </View>
    </SafeAreaView>
  )
}

WelcomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
}