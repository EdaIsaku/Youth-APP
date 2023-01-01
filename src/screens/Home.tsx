import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity>
        <Text>Go to User</Text>
      </TouchableOpacity>
    </View>
  );
};
