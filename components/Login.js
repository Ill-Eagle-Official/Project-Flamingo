import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Flamingo!</Text>
            <TouchableOpacity
              style={styles.loginButton} 
              onPress={() => console.log('Login button pressed')}
            >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => console.log('Signup button pressed')}
            >
                <Text style={styles.signupText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4169e1'
  },

  title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20
  },

  loginButton: {
      backgroundColor: 'white',
      width: 200,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginBottom: 20
  },

  loginText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4169e1'
  },

  signupButton: {
      backgroundColor: '#4169e1',
      width: 200,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'white'
  },

  signupText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
  }
});

export default LoginScreen;

