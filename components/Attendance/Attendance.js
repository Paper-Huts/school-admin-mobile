import React from 'react'
import { Surface, Title, Divider } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const Attendance = () => {
  return (
    <Surface style={styles.screenContainer}>
      <Surface style={styles.screenTitleContainer}>
        <Title style={styles.screenTitle}>Attendance</Title>
      <Divider style={styles.divider} />
      </Surface>
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
    flex: 1.2,
    justifyContent: 'flex-end',
    backgroundColor: '#BCE0FD',
    paddingLeft: 15,
  },
  screenTitle: {
    fontFamily: 'Arial',
    fontWeight: '100',
    fontSize: 20
  },
  divider: {
    backgroundColor: 'white',
    width: '90%',
  },
  cardContainer: {
    flex: 8,
    backgroundColor: '#BCE0FD',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})

export default Attendance