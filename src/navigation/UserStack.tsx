import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { User, CustomCamera } from "../screens";

const Tab = createBottomTabNavigator();

export const UserStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="User"
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          display: "none",
        },
      })}
    >
      <Tab.Screen
        name="UserStack"
        component={User}
        initialParams={{ username: "Eda Isaku" }}
      />
      <Tab.Screen name="CustomCamera" component={CustomCamera} />
    </Tab.Navigator>
  );
};
