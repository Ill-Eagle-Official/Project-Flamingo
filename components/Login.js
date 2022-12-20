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

