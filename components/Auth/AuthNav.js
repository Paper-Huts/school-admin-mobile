import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LogIn from "./LogIn";

const Stack = createStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LogIn} />
    </Stack.Navigator>
  );
};

export default AuthNav;
