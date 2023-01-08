import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import { Home, Search, Ticket, User } from "../screens";
import { ICONS } from "../constants/icons";
import { COLORS, SIZES } from "../../theme/theme";

// type RootStackParamList = {
//   Home: undefined;
//   Ticket: undefined;
//   User: { userID: string };
// };

// const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
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
          tabBarStyle: {
            position: "absolute",
            left: SIZES.phoneDimensions.width / 10,
            backgroundColor: COLORS.white,
            marginBottom: 30,
            borderRadius: 30,
            height: 60,
            width: "80%",
            shadowColor: COLORS.white,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
          },
          tabBarLabelStyle: {
            fontFamily: "Lato-Regular",
            fontSize: SIZES.body4,
          },
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
    // backgroundColor: "red",
  },
  focusedIcon: {
    tintColor: COLORS.secondary,
  },
});
