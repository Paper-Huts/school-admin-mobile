import React from 'react'
import { Card, Title, useTheme } from 'react-native-paper'
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
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SmallCard