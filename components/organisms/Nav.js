import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Nav = () => {
  return (
    <View style={styles.container}>
      <Text>Hazlo</Text>
      <Text>Do It Now</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 15,
  },
});
