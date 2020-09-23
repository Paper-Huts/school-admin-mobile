import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

const LogIn = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    navigation.navigate("HomeBottomNav", { screen: "Home"});
  }

  return (
    <View style={styles.container} >
      <Image 
        style={styles.logo}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        mode="outlined"
        placeholder="enter unm email address"
      />
      <TextInput
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
        mode="outlined"
        placeholder="enter password"
      />
      <Button mode="contained" onPress={login} >Log in</Button>
      <Button mode="text" >Sign up</Button> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 100,
    padding: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  }
});

export default LogIn;
