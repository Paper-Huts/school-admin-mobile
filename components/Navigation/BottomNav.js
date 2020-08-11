import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { StyleSheet } from 'react-native'

import HomeScreen from '../HomeScreen/HomeScreen'
import FeePayment from '../FeePayment/FeePayment'
import Attendance from '../Attendance/Attendance'
import Registration from '../Registration/Registration'

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={styles.bottomNav}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: 'home-account',
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          tabBarIcon: 'format-list-bulleted',
        }}
      />
      <Tab.Screen
        name="FeePayment"
        component={FeePayment}
        options={{
          tabBarIcon: 'cash-multiple',
        }}
      />
      <Tab.Screen
        name="Registration"
        component={Registration}
        options={{
          tabBarIcon: 'account-plus',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: '#FFFFFF'
  }
})

export default BottomNav