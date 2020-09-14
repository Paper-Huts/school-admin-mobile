import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { IconButton, Button } from 'react-native-paper'
import _ from 'lodash'

import MainHeader from '../CustomComponents/MainHeader'
import SubHeader from '../CustomComponents/SubHeader'

const RegistrationConfirmation = ({ route, navigation }) => {
  const values = route.params
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTitleContainer}>
        <MainHeader 
          header='Registration' 
          headerIcon='account-plus'
          iconBackground="#BCFDC5"
          iconColor='#030303'
        />
        <SubHeader
          title='New Student'
        />
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.listContent}
          data ={Object.entries(values)}
          renderItem={({item}) => <Text style={styles.listText}>{_.startCase(item[0])} : {item[1]}</Text>}
        />
        <View style={styles.buttons}>
          <Button mode='contained'
            contentStyle={styles.editButtonContent} 
            color='#030303' 
            style={styles.button} 
            onPress={() => navigation.goBack()}>
            Edit Student Details
            <IconButton icon='pencil' color='white' size={12} /> 
          </Button>
          <Button mode='contained'
            contentStyle={styles.addButtonContent} 
            color='#030303' 
            style={styles.button} 
            onPress={() => navigation.goBack()}>
            Confirm Submission
            <IconButton icon='plus' color='white' size={12} /> 
          </Button>
        </View>
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
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  listContainer: {
    flex: 1,
    width: '80%',
  },
  listContent: {
    flex: 9,
    justifyContent: 'space-evenly',
  },
  listText: {
    fontSize: 20,
  },
  buttons: {
    flex: .5,
    justifyContent: 'space-evenly'
  },
  editButtonContent: {
    backgroundColor: 'grey',
  },
  addButtonContent: {
    backgroundColor: 'blue'
  }
})

export default RegistrationConfirmation
