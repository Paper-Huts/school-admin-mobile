import React from 'react'
import { Subheading, Divider } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

const SubHeader = ({ title }) => {
  return (
    <View style={styles.subHeaderContainer}>
      <Subheading style={styles.subHeaderText}>{title}</Subheading>
      <Divider style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  subHeaderContainer: {
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  subHeaderText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  divider: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
})

export default SubHeader
