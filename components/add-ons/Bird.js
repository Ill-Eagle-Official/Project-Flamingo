import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

let pic = {
  uri: "https://images.newscientist.com/wp-content/uploads/2015/09/dn28218-1_800.jpg?width=800",
};

export default function Bird() {
  return (
    <View style={styles.container}>
      <View style={styles.bird}>
        <Image style={styles.image} source={pic} />
      </View>
    </View>
  );
}
