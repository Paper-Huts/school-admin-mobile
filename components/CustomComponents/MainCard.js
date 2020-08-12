import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const MainCard = ({ title, icon, iconBackground, iconColor, navigateTo }) => {
  const navigation = useNavigation()
  return (
    <Card style={styles.container} onPress={() => navigation.navigate(navigateTo)}>
      <Card.Title
        style={styles.cardTitle}
        title={title}
        left={(props) => <Avatar.Icon {...props} icon={icon} color={iconColor} style={{ backgroundColor: iconBackground }} />}
        right={(props) => <IconButton {...props} icon="chevron-right" />}
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 20,
    height: '18%',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  cardTitle: {
    flex: 1
  }
})

export default MainCard;