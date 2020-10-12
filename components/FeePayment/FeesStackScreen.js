import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FeePayment from './FeePayment'
import ClassFeesList from './ClassFeesList'

const FeesStack = createStackNavigator()

const FeesStackScreen = () => {
  return (
    <FeesStack.Navigator>
      <FeesStack.Screen name="Fees" component={FeePayment} />
      <FeesStack.Screen name='ClassFees' component={ClassFeesList} />
    </FeesStack.Navigator>
  )
}

export default FeesStackScreen
