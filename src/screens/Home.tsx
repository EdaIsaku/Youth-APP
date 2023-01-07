import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

interface Navigation {
  navigate(destination: string): void;
}

export const Home = ({ navigation }: { navigation: Navigation }) => {
  return (
    <View>
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
