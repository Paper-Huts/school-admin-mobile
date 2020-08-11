import * as React from 'react';
import { Appbar } from 'react-native-paper';

const TopNav = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="School Admin" />
      <Appbar.Action icon="cogs" color="#0085F6" size={30} />
    </Appbar.Header>
  );
};

export default TopNav;