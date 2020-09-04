import React from "react";
import { StyleSheet, View } from "react-native";

class LogIn extends React.Component {

  state = {
    username: "",
    password: ""
  }


  render() {
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#efefef",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default LogIn;
