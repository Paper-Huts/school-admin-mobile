import React from 'react'
import { Card, Title } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const SmallCard = ({ title }) => {
  return (
    <Card style={styles.container}>
      <Card.Content style={styles.content}>
        <Title style={styles.title}>{title}</Title>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 90,
    flex: 0.4
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontSize: 16,
    textAlign: 'center'
  }
})

export default SmallCard