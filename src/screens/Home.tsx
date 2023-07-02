import { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, POSITION } from "../../theme/theme";
import { IMAGES, EVENTS } from "../constants";
import { PopularEvent } from "../components";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { STYLES } from "../navigation/RootTabStyles";
import openMap from "react-native-open-maps";

interface Navigation {
  navigate(destination: string): void;
}

export const Home = ({ navigation }: { navigation: Navigation }) => {
  const customNavigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      customNavigation.getParent()?.setOptions({
        tabBarStyle: {
          ...STYLES.tabBarStyle,
          display: "flex",
        },
      });
    }, [])
  );

  const _goToYosemite = () => {
    openMap({
      latitude: 41.3275,
      longitude: 19.8187,
      waypoints: [],
    });
  };
  return (
    // <LinearGradient
    //   // Background Linear Gradient
    //   colors={["#ffffff", "#eeeeee"]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 0.7, y: 1 }}
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     justifyContent: "space-around",
    //     alignItems: "center",
    //   }}
    // >
    <SafeAreaView style={styles.container}>
      <View style={styles.upContainer}>
        <Text style={styles.title}>YOUTH</Text>
        <TouchableOpacity
          onPress={() => {
            _goToYosemite();
            // navigation.navigate("Map");
          }}
          style={styles.searchMapContainer}
        >
          <View style={styles.leftContainer}>
            <Text style={styles.mapTitle}>Find through the map</Text>
            <Text style={styles.mapSubtitle}>Tirana, Albania</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image source={IMAGES.mini_map} style={styles.mapImage}></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.subtitle}>Collections</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.popularContainer}
          showsHorizontalScrollIndicator={false}
        >
          {EVENTS.map((el, idx) => {
            return (
              <PopularEvent
                key={idx}
                eventName={el.eventName}
                eventType={el.eventType}
                image={el.image}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.downContainer}>
        <Text style={styles.subtitle}>Upcoming</Text>
      </View>
    </SafeAreaView>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  upContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 0.2,
    marginHorizontal: 10,
  },
  middleContainer: {
    flex: 0.45,
  },
  downContainer: {
    backgroundColor: "teal",
    // ...POSITION.center,
    flex: 0.25,
    width: "100%",
    marginBottom: 80,
  },
  searchMapContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.border * 2,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  popularContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 40,
  },
  leftContainer: {
    flex: 0.55,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: SIZES.border * 2,
    borderBottomLeftRadius: SIZES.border * 2,
  },
  rightContainer: {
    flex: 0.45,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    color: COLORS.black,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h1,
    paddingBottom: 15,
    marginTop: 10,
  },
  mapTitle: {
    paddingBottom: 5,
    color: COLORS.black,
    fontSize: SIZES.body2,
    fontFamily: "Lato-Regular",
  },
  mapSubtitle: {
    color: COLORS.darkGrey,
    fontSize: SIZES.body3,
    fontFamily: "Lato-Light",
  },
  mapImage: {
    borderRadius: SIZES.border,
    width: "80%",
    height: "80%",
  },
  subtitle: {
    color: COLORS.black,
    fontFamily: "Lato-Bold",
    fontSize: SIZES.h2 + 5,
    paddingTop: 10,
    paddingLeft: 10,
  },
});
