import React from "react";
import { Home, Map } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};
