import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Flamingo!</Text>
      <Text style={styles.subtitle}>Which site are you at today?</Text>

      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("pressed first site")}
        >
          <Text style={styles.buttonText}>Site 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("pressed second site")}
        >
          <Text style={styles.buttonText}>Site 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("pressed third site")}
        >
          <Text style={styles.buttonText}>Site 3</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4169e1",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4169e1",
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  scrollView: {
    width: "100%",
  }

});
