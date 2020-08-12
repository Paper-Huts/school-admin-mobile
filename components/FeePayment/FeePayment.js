import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import MainHeader from '../CustomComponents/MainHeader'
import SubHeader from '../CustomComponents/SubHeader'
import SmallCard from '../CustomComponents/SmallCard'
import { classes } from '../MockData/ClassData'

const FeePayment = () => {
  const classData = Object.values(classes)

  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTitleContainer}>
        <MainHeader 
          header='Fee Payment' 
          headerIcon='cash-multiple'
          iconBackground="#00A284"
          iconColor='#F7F7F7'
        />
        <SubHeader
          title='Select a class'
        />
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={classData}
          numColumns={2}
          contentContainerStyle={styles.cardList}
          columnWrapperStyle={styles.cardRow}
          renderItem={itemData => (
            <SmallCard title={itemData.item.title} />
          )} />
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
    justifyContent: 'space-between',
    backgroundColor: '#BCE0FD',
  },
  cardContainer: {
    flex: 9,
    backgroundColor: '#BCE0FD',
  },
  cardList: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  cardRow: {
    justifyContent: 'space-evenly',
  }
})

export default FeePayment
