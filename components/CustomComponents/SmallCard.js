import React from 'react'
import { Card, Title, useTheme } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const SmallCard = ({ title }) => {
  const { colors } = useTheme()
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
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    // color: colors.text
  }
})

export default SmallCard