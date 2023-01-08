import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../theme/theme";

interface Navigation {
  navigate(destination: string): void;
}

export const Home = ({ navigation }: { navigation: Navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Ticket");
        }}
      >
        <Text>Go to User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey,
  },
});
