import React from 'react'
import { Title, Divider } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import _ from 'lodash'

import MainCard from '../CustomComponents/MainCard'

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTitleContainer}>
        <Title style={styles.screenTitle}>Quick Links</Title>
      <Divider style={styles.divider} />
      </View>
      <View style={styles.cardContainer}>
        {[
          { id: 1, title: 'Pay Feeding Fee', icon: 'food', iconBackground: '#ABF264', iconColor: 'black', path: 'FeePayment' },
          { id: 2, title: 'Take Attendance', icon: 'format-list-bulleted', iconBackground: '#FFC1FF', iconColor: 'black', path: 'Attendance' },
          { id: 3, title: 'Pay School Fees', icon: 'cash-multiple', iconBackground: '#00A284', iconColor: 'white', path: 'FeePayment' },
          { id: 4, title: 'Add New Student', icon: 'account-plus', iconBackground: '#BCFDC5', iconColor: 'black', path: 'Registration' },
        ].map(({id, title, icon, iconBackground, iconColor, path}) => (
          <MainCard 
            key={`${id}-${_.snakeCase(title)}`} 
            title={title} 
            icon={icon}  
            style={styles.card} 
            iconBackground={iconBackground} 
            iconColor={iconColor} 
            navigateTo={path}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#BCE0FD',
    flex: 1
  },
  screenTitleContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    backgroundColor: '#BCE0FD',
    paddingLeft: 15,
  },
  screenTitle: {
    fontWeight: 'bold',
    fontSize: 25
  },
  divider: {
    backgroundColor: 'white',
    width: '90%',
  },
  cardContainer: {
    flex: 10,
    backgroundColor: '#BCE0FD',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})

export default HomeScreen