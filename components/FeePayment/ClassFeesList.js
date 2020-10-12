import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Surface } from 'react-native-paper'

const ClassFeesList = ({ grade }) => {
  return (
    <Surface style={styles.screenContainer}>
      <View style={styles.screenTitleContainer}>
        <Text>{grade}</Text>
      </View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#BCE0FD',
    flex: 1
  },
  screenTitleContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    backgroundColor: '#BCE0FD',
  },
  cardContainer: {
    flex: 10,
    backgroundColor: '#BCE0FD',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})

export default ClassFeesList
