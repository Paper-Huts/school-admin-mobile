import React from 'react'
import { Surface } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

import MainHeader from '../CustomComponents/MainHeader'
import SubHeader from '../CustomComponents/SubHeader'

const ClassList = ({ grade }) => {
  return (
    <Surface style={styles.screenContainer}>
      <View style={styles.screenTitleContainer}>
        <MainHeader 
          header='Attendance' 
          headerIcon='format-list-bulleted'
          iconBackground="#FFC1FF"
          iconColor='#030303'
        />
        <SubHeader
          title={grade ?? 'None Yet'}
        />
      </View>
      <Surface style={styles.cardContainer}>

      </Surface>
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

export default ClassList