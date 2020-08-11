import React from 'react'
import { Surface, Card, Title, Divider } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import _ from 'lodash'

import MainCard from '../CustomComponents/MainCard'

const HomeScreen = () => {
  return (
    <Surface style={styles.screenContainer}>
      <Surface style={styles.screenTitleContainer}>
        <Title style={styles.screenTitle}>Quick Links</Title>
      <Divider style={styles.divider} />
      </Surface>
      <Surface style={styles.cardContainer}>
        {[
          { id: 1, title: 'Pay Feeding Fee', icon: 'food', iconBackground: '#ABF264', iconColor: 'black' },
          { id: 2, title: 'Take Attendance', icon: 'format-list-bulleted', iconBackground: '#FFC1FF', iconColor: 'black' },
          { id: 3, title: 'Pay School Fees', icon: 'cash-multiple', iconBackground: '#00A284', iconColor: 'white' },
          { id: 4, title: 'Add New Student', icon: 'account-plus', iconBackground: '#BCFDC5', iconColor: 'black' },
        ].map(({id, title, icon, iconBackground, iconColor}) => (
          <MainCard key={`${id}-${_.snakeCase(title)}`} title={title} icon={icon}  style={styles.card} iconBackground={iconBackground} iconColor={iconColor} />
        ))}
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

export default HomeScreen