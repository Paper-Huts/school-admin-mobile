import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Registration from './Registration'
import RegistrationConfirmation from './RegistrationConfirmation'

const RegistrationStack = createStackNavigator()

const RegistrationStackScreen = () => {
  return (
    <RegistrationStack.Navigator>
      <RegistrationStack.Screen name="Registration" component={Registration} />
      <RegistrationStack.Screen name="RegistrationConfirmation" component={RegistrationConfirmation} />
    </RegistrationStack.Navigator>
  )
}

export default RegistrationStackScreen
