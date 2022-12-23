import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Flamingo!</Text>
        <Text style={styles.subtitle}>Which site are you at today?</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('pressed first site')}
        >
          <Text style={styles.buttonText}>Site 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('pressed second site')}
        >
          <Text style={styles.buttonText}>Site 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('pressed third site')}
        >
          <Text style={styles.buttonText}>Site 3</Text>
        </TouchableOpacity>
    )
