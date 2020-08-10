import React from 'react'
import { Surface, Title, Divider, Avatar } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { classes } from '../MockData/ClassData'
import SmallCard from '../CustomComponents/SmallCard'
import { FlatList } from 'react-native-gesture-handler'

const FeePayment = () => {
  const classData = Object.values(classes)
  console.log(classData)

  return (
    <Surface style={styles.screenContainer}>
      <Surface style={styles.screenTitleContainer}>
        <View style={styles.screenTitle}>
        <Title>Fee Payment</Title>
        <Avatar.Icon icon='cash-multiple' style={styles.titleIcon} size={40} />
        </View>
      <Divider style={styles.divider} />
      </Surface>
      <Surface style={styles.cardContainer}>
        <FlatList
          data={classData}
          numColumns={2}
          contentContainerStyle={styles.cardList}
          renderItem={itemData => (
            <SmallCard title={itemData.item.title} />
          )} />
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
    paddingRight: 15,
  },
  screenTitle: {
    fontFamily: 'Arial',
    fontWeight: '100',
    fontSize: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#BCE0FD',
  },
  titleIcon: {
    backgroundColor: 'white',
  },
  divider: {
    backgroundColor: 'white',
    width: '80%',
  },
  cardContainer: {
    flex: 8,
    backgroundColor: '#BCE0FD',
  }, 
  cardList: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'space-between',
  }
})

export default FeePayment
