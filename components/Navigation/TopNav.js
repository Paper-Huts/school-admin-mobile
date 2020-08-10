import * as React from 'react';
import { Appbar } from 'react-native-paper';

const TopNav = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="School Admin" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default TopNav;