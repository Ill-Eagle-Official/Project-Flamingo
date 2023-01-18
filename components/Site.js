import { useLinkProps } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const SiteScreen = ({ navigation }, props) => {

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {props.name}</Text>
      <Text style={styles.subtitle}>Here is a list of the birds at this site.</Text>

      <ScrollView style={styles.scrollView}>
        

  )

}