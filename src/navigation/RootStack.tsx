import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import { Home, Search, Ticket, User } from "../screens";
import { ICONS } from "../constants/icons";
import { COLORS } from "../../theme/theme";
import { STYLES } from "./RootTabStyles";

const Tab = createBottomTabNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = ICONS.home;
            } else if (route.name === "Search") {
              iconName = ICONS.search;
            } else if (route.name === "User") {
              iconName = ICONS.user;
            } else {
              iconName = ICONS.tickets;
            }
            return (
              <Image
                source={iconName}
                style={[styles.icon, focused && styles.focusedIcon]}
              />
            );
          },
          tabBarStyle: { ...STYLES.tabBarStyle },
          tabBarLabelStyle: { ...STYLES.tabBarLabelStyle },
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: COLORS.lightGrey,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Ticket" component={Ticket} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    tintColor: COLORS.lightGrey,
  },
  focusedIcon: {
    tintColor: COLORS.secondary,
  },
});
