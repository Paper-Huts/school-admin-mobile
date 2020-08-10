import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MainCard = ({ id, title, icon, iconBackground, iconColor }) => (
    <Card.Title
      style={styles.container}
      title={title}
      left={(props) => <Avatar.Icon {...props} icon={icon} color={iconColor} style={{ backgroundColor: iconBackground }} />}
      right={(props) => <IconButton {...props} icon="chevron-right" />}
    />
);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 20,
    height: '18%',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  leftIcon: {
    backgroundColor: 'green'
  }
})

export default MainCard;