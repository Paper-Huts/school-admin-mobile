import React, { useState } from 'react'
import { Surface, TextInput, Button, IconButton } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

import MainHeader from '../CustomComponents/MainHeader'
import SubHeader from '../CustomComponents/SubHeader'

const Registration = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [otherNames, setotherNames] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [grade, setGrade] = useState('')
  return (
    <Surface style={styles.screenContainer}>
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
      <Surface style={styles.cardContainer}>
        <TextInput
          style={styles.formItem}
          selectionColor='black'
          label='First Name'
          value={firstName}
          onChange={firstName => setFirstName(firstName)}
        />
        <TextInput
          style={styles.formItem}
          label='Last Name'
          value={lastName}
          onChange={lastName => setLastName(lastName)}
        />
        <TextInput
          style={styles.formItem}
          label='Other Names'
          value={otherNames}
          onChange={otherNames => setotherNames(otherNames)}
        />
        <TextInput
          style={styles.formItem}
          label='Date Of Birth'
          value={dateOfBirth}
          onChange={dateOfBirth => setDateOfBirth(dateOfBirth)}
        />
        <TextInput
          style={styles.formItem}
          label='Grade/Class'
          value={grade}
          onChange={grade => setGrade(grade)}
        />
        <Button mode='contained' contentStyle={styles.formButtonContent} style={styles.formButton}>
          Submit
          <IconButton icon='send' color='white' size={10} /> 
        </Button>
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
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  formItem: {
    width: '80%',
  },
  formButtonContent: {
    backgroundColor: 'green',
    color: 'white'
  },
  formButton: {
    width: '80%',
  }
})

export default Registration