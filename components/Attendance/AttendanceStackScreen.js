import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Attendance from './Attendance'
import ClassList from './ClassList'

const AttendanceStack = createStackNavigator()

const AttendanceStackScreen = () => {
  return (
    <AttendanceStack.Navigator>
      <AttendanceStack.Screen name="Attendance" component={Attendance} />
      <AttendanceStack.Screen name="ClassList" component={ClassList} />
    </AttendanceStack.Navigator>
  )
}

export default AttendanceStackScreen
