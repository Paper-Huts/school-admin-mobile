import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, Avatar } from 'react-native-paper'
import _ from 'lodash'

const MainHeader = ({ header, headerIcon, iconBackground, iconColor }) => {
  return (
    <View style={styles.screenTitle}>
      <Title style={styles.header}>{_.upperCase(header)}</Title>
      <Avatar.Icon 
        icon={headerIcon} 
        size={35} 
        style={{ backgroundColor: iconBackground }}
        color={iconColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  screenTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#BCE0FD',
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
  },
})

export default MainHeader
