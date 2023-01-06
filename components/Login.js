import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Flamingo!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#4169e1"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#4169e1"
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => console.log("Login button pressed")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupArea}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => console.log("Signup button pressed")}
        >
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4169e1",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "75%",
    height: 40,
    marginBottom: 20,
    alignItems: "center",
  },

  input: {
    height: 50,
    flex: 1,
    padding: 10,
  },

  loginButton: {
    backgroundColor: "white",
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },

  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4169e1",
  },

  signupArea: {
    marginTop: 50,
    alignItems: "center",
  },

  signupText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },

  signupButton: {
    backgroundColor: "#4169e1",
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },

  signupText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default LoginScreen;
