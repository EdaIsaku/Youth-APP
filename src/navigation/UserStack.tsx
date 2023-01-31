import React from "react";
import { User, CustomCamera } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="UserStack"
        component={User}
        initialParams={{ username: "Eda Isaku" }}
      />
      <Stack.Screen name="CustomCamera" component={CustomCamera} />
    </Stack.Navigator>
  );
};
