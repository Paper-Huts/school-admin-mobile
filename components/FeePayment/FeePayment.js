import React from 'react'
import { Surface } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { classes } from '../MockData/ClassData'
import SmallCard from '../CustomComponents/SmallCard'
import { FlatList } from 'react-native-gesture-handler'

import MainHeader from '../CustomComponents/MainHeader'
import SubHeader from '../CustomComponents/SubHeader'

const FeePayment = () => {
  const classData = Object.values(classes)
  console.log(classData)

  return (
    <Surface style={styles.screenContainer}>
      <View style={styles.screenTitleContainer}>
        <MainHeader 
          header='Fee Payment' 
          headerIcon='cash-multiple'
          iconBackground="#00A284"
          iconColor='#F7F7F7'
        />
        <SubHeader
          title='New Student'
        />
      </View>
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
    flex: 2,
    justifyContent: 'flex-start',
    backgroundColor: '#BCE0FD',
  },
  cardContainer: {
    flex: 8,
    backgroundColor: '#BCE0FD',
  }, 
  cardList: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
  }
})

export default FeePayment
